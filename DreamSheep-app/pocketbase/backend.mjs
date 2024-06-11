import PocketBase from 'pocketbase';
const pb = new PocketBase ('http://127.0.0.1:8090')
/*
try {
    const dreams = await pb.collection("dreams").getFullList({
      filter: `userId='6zm8tisg9fr4kam'`,
      expand: 'userId',
    });
    console.log(dreams);
  } catch (error) {
    console.error(error);
  }
*/
  try {
    const comm = await pb.collection("commentaires").getFullList({
      //filter: `userId='6zm8tisg9fr4kam'`,
      expand: 'dreamId',
    });
    console.log(comm);
  } catch (error) {
    console.error(error);
  }

try{
    const pseudo = await pb.collections
}