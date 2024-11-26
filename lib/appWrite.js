import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";

export const config = {
  endpoint: "http://192.168.5.106:8090/v1",
  platform: "net.abdaziz.loginapp",
  projectId: "6740438f0010c8019819",
  databaseId: "674448dd001dea4c6d32",
  userCollectionId: "67444b32002a1e3e22e1",
  storageId: "67444aad00034bf915f0",
};

const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  videoCollectionId,
  storageId,
} = config;

const client = new Client();

// Set the SDK endpoint
client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

// Create instances of the services
const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    //create account
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw new Error("Pendaftaran akun gagal");
    console.log(newAccount);
    const avatarUrl = avatars.getInitials(username);

    //sign in
    await signIn(email, password);

    //create user on databases
    const newUser = await databases.createDocument(
      databaseId,
      userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    //return the new user
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
    //session sign in
    const session = await account.createEmailPasswordSession(email, password);
    if (!session) throw new Error("Sign in gagal");
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw new Error("Akun pengguna tidak ditemukan");

    const currentUser = await databases.listDocuments(
      databaseId,
      userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw new Error("Pengguna tidak ditemukan di database");

    return currentUser.documents[0];
  } catch (error) {
    throw new Error(error);
  }
};

export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}
