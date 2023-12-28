import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stories: [
    {
      _id: "631818c2d8ede10906095c64",
      title: "Stealing",
      about:
        "Joe Pickett is scouting the Gros Ventre Range, filling in as game warden. He hears high snapping sounds in the distance. They were gunshots, and not all of the same caliber. It doesn’t sound like hunters. He weighs his options. Another sound settles it for him.In the Yukon, a man is traveling on foot with a husky in the wilderness to meet some acquaintances. It’s –75 degrees and even though he’s careful, he breaks through some ice and soaks his boots, necessitating a fire.Conn Corbansson fought for Sweyn Tjugas in his rise to King of Denmark. Sweyn had promised they would also take England, but now he’s hesitant. Sweyn has his sights set on Norway, and has enlisted the help of the Jomsvikings. Conn is upset with the change. While feasting, many of the notables make public oaths. Caught up in the moment, Conn makes one himself.",
      type: "Action",
      userId: {
        _id: "63181831d8ede10906095c5d",
        name: "Viraj Gupta",
        email: "v@v",
        password:
          "$2b$08$S7wCae58eMfV4IrjnBCOOOWvJYT2Wp4lbumunp6h46e8JMM2v.Eaq",
        createdAt: "2022-09-07T04:04:01.093Z",
        updatedAt: "2022-09-07T04:04:01.093Z",
      },
      createdAt: "2022-09-07T04:06:26.848Z",
      updatedAt: "2022-09-07T04:06:26.848Z",
    },
    {
      _id: "6317b1274c9b0280598ef52e",
      title: "Warzone",
      about:
        "World War II changed the political alignment and social structure of the globe. The United Nations (UN) was established to foster international co-operation and prevent future conflicts,[1] with the victorious great powers—China, France, the Soviet Union, the United Kingdom, and the United States—becoming the permanent members of its Security Council. The Soviet Union and the United States emerged as rival superpowers, setting the stage for the nearly half-century-long Cold War. In the wake of European devastation, the influence of its great powers waned, triggering the decolonisation of Africa and Asia. Most countries whose industries had been damaged moved towards economic recovery and expansion. Political and economic integration, especially in Europe, began as an effort to forestall future hostilities, end pre-war enmities and forge a sense of common identity.",
      type: "Thriller",
      userId: {
        _id: "63171b3f1d3d78925a6640ad",
        name: "Arun Mishra",
        email: "a@a",
        password:
          "$2b$08$5QOsBgcQWIlkpeuUqEc3p.LjyMQMTWbdvbFR/cddwUtOjCx0WuInK",
        createdAt: "2022-09-06T10:04:47.056Z",
        updatedAt: "2022-09-06T10:04:47.056Z",
      },
      createdAt: "2022-09-06T20:44:23.370Z",
      updatedAt: "2022-09-14T04:35:39.967Z",
    },
    {
      _id: "6317b1744c9b0280598ef538",
      title: "Love",
      about:
        "Love is a powerful emotion. Throughout history couples in love have caused wars and controversy, created masterpieces in writing, music, and art, and have captured the hearts of the public with the power of their bonds. From the allure of Cleopatra to the magnetism of the Kennedy's, these love affairs have stood as markers in history. Prepare to swoon over these love stories of the centuries.She was another man's wife, but when Paris, the \"handsome, woman-mad\" prince of Troy, saw Helen, the woman whom Aphrodite proclaimed the most beautiful in the world, he had to have her. Helen and Paris ran off together, setting in motion the decade-long Trojan War. ",
      type: "Love",
      userId: {
        _id: "63171b3f1d3d78925a6640ad",
        name: "Arya Mishra",
        email: "ay@ay",
        password:
          "$2b$08$5QOsBgcQWIlkpeuUqEc3p.LjyMQMTWbdvbFR/cddwUtOjCx0WuInK",
        createdAt: "2022-09-06T10:04:47.056Z",
        updatedAt: "2022-09-06T10:04:47.056Z",
      },
      createdAt: "2022-09-06T20:45:40.014Z",
      updatedAt: "2022-09-06T20:45:40.014Z",
    },
    {
      _id: "6318194ed8ede10906095c6c",
      title: "Fire",
      about:
        "Jyiro repeated his mantra, psyching himself up for what was to come, beckoning the thrill to approach him, as if asking for a challenge. He wasn’t killing people. He would never kill people.  The salty air pricked his nose as he sauntered through the sandstone alley, only a block away from the library. In one pocket, he held the matches, and in the other, the words he would use.  There were bright green bushes all around him, and he could hear the echoes of the pelicans up above. The city was situated near the sea on one side and the mountains on the other. The mountains were full of green. Green trees, green grass, even the dirt looked green. The midnight breeze blew in his hair, and he took a breath.",
      type: "Fantasy",
      userId: {
        _id: "63181831d8ede10906095c5d",
        name: "Alok Singh",
        email: "a@s",
        password:
          "$2b$08$S7wCae58eMfV4IrjnBCOOOWvJYT2Wp4lbumunp6h46e8JMM2v.Eaq",
        createdAt: "2022-09-07T04:04:01.093Z",
        updatedAt: "2022-09-07T04:04:01.093Z",
      },
      createdAt: "2022-09-07T04:08:46.281Z",
      updatedAt: "2022-09-07T04:08:46.281Z",
    },
    {
      _id: "63181974d8ede10906095c6e",
      title: "Cat",
      about:
        "Hi, I'm Timmy McHill and drugs and AA started me on the road to where I am today in the world of feline telephone fraud. I’m not sure which one, maybe both. My career in Customer Service began right after I took a quick detour from university at age 19. My educational readjustment happened because the University Police didn't understand the economic theory of harm reduction. Since the nursing students I was attending class with had an inflexible demand for party drugs, they would be dealing with real drug dealers do...",
      type: "Crime",
      userId: {
        _id: "63181831d8ede10906095c5d",
        name: "Raj Gupta",
        email: "r@v",
        password:
          "$2b$08$S7wCae58eMfV4IrjnBCOOOWvJYT2Wp4lbumunp6h46e8JMM2v.Eaq",
        createdAt: "2022-09-07T04:04:01.093Z",
        updatedAt: "2022-09-07T04:04:01.093Z",
      },
      createdAt: "2022-09-07T04:09:24.709Z",
      updatedAt: "2022-09-07T04:09:24.709Z",
    },
    {
      _id: "6318191fd8ede10906095c66",
      title: "The Devil",
      about:
        "Cold tendrils of water push and pull at my feet. This ocean, this force of nature which I cannot part with thoughts alone, moves around me with a great delicacy. It laps at the shore, only to pull away. Faced with constant indecision. To stay or to go. Push and pull.    Enough of this gray sky. Enough of contemplating passive waves. I venture past foaming water, past fine grains of sand, and back into the thicket of trees and trailing plants until I am upon the devil’s ivy, epipremnum aureum. Specks of gold fleck its waxy green face. With my pocket knife I slice three leaves off at the node, wrapping it in moist cloth before placing it in my bag.   On the path home, actinorhytis and veitchia pachyclada wave feathery palmed hands down at me. Ferns and lycophytes part their wispy heads for me.   Our little house in the woods hums with a great symphony. A melancholy symphony of tired choirs and dull sousaphones. Doleful piccolos and absent trumpets. In the iris of this mournful hymn sits my heart, poisoned and plagued with constant indecision. To stay or to go. Pushed and pulled. There is another symphony somewhere far away. It plays in distorted and somewhat terrifying sways of tempo. Just swings from one ear to the other, calling, pulling, persuading.",
      type: "Fantasy",
      userId: {
        _id: "63181831d8ede10906095c5d",
        name: "Kavya Singh",
        email: "k@s",
        password:
          "$2b$08$S7wCae58eMfV4IrjnBCOOOWvJYT2Wp4lbumunp6h46e8JMM2v.Eaq",
        createdAt: "2022-09-07T04:04:01.093Z",
        updatedAt: "2022-09-07T04:04:01.093Z",
      },
      createdAt: "2022-09-07T04:07:59.883Z",
      updatedAt: "2022-09-07T04:07:59.883Z",
    },
    {
      _id: "631819ecd8ede10906095c76",
      title: "The Dead Person",
      about:
        "Someone has died. Of this, I am certain. I know it because I always know it. As I lie here alone in this big, empty bed and listen to the rain, I remember it as it returns to me, this feeling, this dread, skittering up and down my throat with a thousand little legs. It settles in my stomach like a great stone, a solid, sickening weight. It is rancid in its heaviness and unmistakable in its familiarity. Someone has died. I do not know who.  I sit up, and I take a long breath, pulling my legs out from beneath the covers so that they can dangle above the hardwood—cold where I press my feet. The remains of chipped red polish color my toes. I had intended to paint them this week, but I could not choose a color. I have been told that I am bad at making decisions, too nervous to choose the wrong one. But I do not think that is true. Someone else has simply always been there to make them on my behalf. But I will make one now.  I will call my daughter, I think. I move for the end table to retrieve my glasses. They sit crooked on my nose, and I push them back into place as I look at my cellphone, plugged into the wall there. I wait for it to ring. I stare. I expect it. But it does not.",
      type: "Horror",
      userId: {
        _id: "63181831d8ede10906095c5d",
        name: "Kamna Gupta",
        email: "k@v",
        password:
          "$2b$08$S7wCae58eMfV4IrjnBCOOOWvJYT2Wp4lbumunp6h46e8JMM2v.Eaq",
        createdAt: "2022-09-07T04:04:01.093Z",
        updatedAt: "2022-09-07T04:04:01.093Z",
      },
      createdAt: "2022-09-07T04:11:24.086Z",
      updatedAt: "2022-09-08T05:11:58.380Z",
    },
    {
      _id: "63183da9c2eaaad80cdbd3a1",
      title: "Azure",
      about:
        "Imagine how hard it is to break up asphalt with a pickaxe. Now imagine it's not even a very good pickaxe. And you've been doing it for days. The sun, hotter now, makes the sweat bead on your face, itchy like a bug landing on you. Sometimes enough water escapes your pores to form a little stream that carves a path down the black dust on your face. And it tortures you that your body is letting such a precious resource just drip onto the ground. Unretrievable.     This has been my existence for almost a full moon. Me, my pickaxe, and the pavement. My hands have carved grooves into the handle as the handle has chiseled callouses onto my hands. I worry my arms won't know how to do anything else by the time I get to stop. Will they remember how to hug? How to hold?",
      type: "Action",
      userId: {
        _id: "63171b3f1d3d78925a6640ad",
        name: "Dhruv Mishra",
        email: "a@a",
        password:
          "$2b$08$5QOsBgcQWIlkpeuUqEc3p.LjyMQMTWbdvbFR/cddwUtOjCx0WuInK",
        createdAt: "2022-09-06T10:04:47.056Z",
        updatedAt: "2022-09-06T10:04:47.056Z",
      },
      createdAt: "2022-09-07T06:43:53.190Z",
      updatedAt: "2022-09-07T11:03:44.543Z",
    },
    {
      _id: "631b2a6015f90ed83ff1efc1",
      title: "Rama",
      about: "Devotion of rama towards his citizens",
      type: "devotion",
      userId: {
        _id: "63171b3f1d3d78925a6640ad",
        name: "Piyush Mishra",
        email: "a@a",
        password:
          "$2b$08$5QOsBgcQWIlkpeuUqEc3p.LjyMQMTWbdvbFR/cddwUtOjCx0WuInK",
        createdAt: "2022-09-06T10:04:47.056Z",
        updatedAt: "2022-09-06T10:04:47.056Z",
      },
      createdAt: "2022-09-09T11:58:24.402Z",
      updatedAt: "2022-09-09T11:58:24.402Z",
    },
    {
      _id: "631819a6d8ede10906095c70",
      title: "The Chandelier",
      about:
        "There were gems in the chandelier right past the door of my home. I wasn’t supposed to touch the glimmering stones as they hung, but I would push up a chair and scramble on the rickety wood to brush them with my fingers anyway. It was addictive to paint the lines of my fingerprints along the surface. I would flick on the lights and watch them sway, imagining my mother on the dance floor, conjuring images of date nights when Mama walked out of the house with a black cocktail dress and her best pearls along with the smokey scent of her expensive perfume.   There was no helping how they reminded me of Mama; the clacking as they collided with one another was the same noise her heels left on the ballroom floor. It was my favorite time to watch the dance lessons she took, hand in hand with a gentleman that smelled of the ocean and spoke with an accent—watching her dance, even practicing, left me with pangs in my heart, and there was nothing I wanted more than to be able to move as she did. ",
      type: "Fiction",
      userId: {
        _id: "63181831d8ede10906095c5d",
        name: "Karuna Gupta",
        email: "k@v",
        password:
          "$2b$08$S7wCae58eMfV4IrjnBCOOOWvJYT2Wp4lbumunp6h46e8JMM2v.Eaq",
        createdAt: "2022-09-07T04:04:01.093Z",
        updatedAt: "2022-09-07T04:04:01.093Z",
      },
      createdAt: "2022-09-07T04:10:14.586Z",
      updatedAt: "2022-09-07T04:10:14.586Z",
    },
  ],
};

export const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    addStory(state, action) {
      // Append the new story to the existing array
      state.stories.push(action.payload);
    },
    updateStory(state, action) {
      // Find the index of the story to update
      const index = state.stories.findIndex(
        (story) => story._id === action.payload._id
      );

      // If the story is found, update it
      if (index !== -1) {
        state.stories[index] = action.payload;
      }
    },
    deleteStory(state, action) {
      // Filter out the story to delete
      state.stories = state.stories.filter(
        (story) => story._id !== action.payload
      );
    },
  },
});

export const { addStory, updateStory, deleteStory } = storySlice.actions;

export default storySlice.reducer;
