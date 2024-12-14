export const BASE_URL = "https://exercisedb.p.rapidapi.com";
export const RAPIDAPI_KEY="7b73ad35damsh40d7955d6e8b88cp1a31c0jsn814a18ce49bf";
export const RAPIDAPI_HOST="exercisedb.p.rapidapi.com";

export const sliderImages = [   
    require('../assets/images/slide1.png'),
    require('../assets/images/slide2.png'),
    require('../assets/images/slide3.png'),
    require('../assets/images/slide4.png'),
    require('../assets/images/slide5.png')
];

export const bodyParts = [
    {
        name: "back",
        image: require("../assets/images/back.png"),
    },
    {
        name: "cardio",
        image: require("../assets/images/cardio.png"),
    },
    {
        name: "chest",
        image: require("../assets/images/chest.png"),
    },
    {
        name: "lower arms",
        image: require("../assets/images/lowerArms.png"),
    },
    {
        name: "lower legs",
        image: require("../assets/images/lowerLegs.png"),
    },
    {
        name: "neck",
        image: require("../assets/images/neck.png"),
    },
    {
        name: "shoulders",
        image: require("../assets/images/shoulders.png"),
    },
    {
        name: "upper arms",
        image: require("../assets/images/upperArms.png"),
    },
    {
        name: "upper legs",
        image: require("../assets/images/upperLegs.png"),
    },
    {
        name: "waist",
        image: require("../assets/images/waist.png"),
    },
];

export const demoExercises  =[
    {
       "bodyPart":"back",
       "equipment":"cable",
       "gifUrl":"https://v2.exercisedb.io/image/0axgjPgrloi7az",
       "id":"0007",
       "instructions":[
          "Sit on the cable machine with your back straight and feet flat on the ground.",
          "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
          "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
          "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
          "Repeat for the desired number of repetitions."
       ],
       "name":"alternate lateral pulldown",
       "secondaryMuscles":[
          "biceps",
          "rhomboids"
       ],
       "target":"lats"
    },
    {
       "bodyPart":"back",
       "equipment":"leverage machine",
       "gifUrl":"https://v2.exercisedb.io/image/k5YdAJ-SdvvDSz",
       "id":"0015",
       "instructions":[
          "Adjust the machine to your desired weight and height.",
          "Place your hands on the parallel bars with a close grip, palms facing each other.",
          "Hang from the bars with your arms fully extended and your feet off the ground.",
          "Engage your back muscles and pull your body up towards the bars, keeping your elbows close to your body.",
          "Continue pulling until your chin is above the bars.",
          "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
          "Repeat for the desired number of repetitions."
       ],
       "name":"assisted parallel close grip pull-up",
       "secondaryMuscles":[
          "biceps",
          "forearms"
       ],
       "target":"lats"
    },
    {
       "bodyPart":"back",
       "equipment":"leverage machine",
       "gifUrl":"https://v2.exercisedb.io/image/II7u1ZAKxBI5Cj",
       "id":"0017",
       "instructions":[
          "Adjust the machine to your desired weight and height settings.",
          "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
          "Hang with your arms fully extended and your feet off the ground.",
          "Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.",
          "Continue pulling until your chin is above the handles.",
          "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
          "Repeat for the desired number of repetitions."
       ],
       "name":"assisted pull-up",
       "secondaryMuscles":[
          "biceps",
          "forearms"
       ],
       "target":"lats"
    },
    {
       "bodyPart":"back",
       "equipment":"barbell",
       "gifUrl":"https://v2.exercisedb.io/image/jU6NpUKegmk-Vb",
       "id":"0022",
       "instructions":[
          "Lie flat on a bench with your head at one end and your feet on the ground.",
          "Hold the barbell with a pronated grip (palms facing away from you) and extend your arms straight above your chest.",
          "Keeping your arms straight, lower the barbell behind your head in an arc-like motion until you feel a stretch in your lats.",
          "Pause for a moment, then reverse the motion and press the barbell back to the starting position above your chest.",
          "Repeat for the desired number of repetitions."
       ],
       "name":"barbell pullover to press",
       "secondaryMuscles":[
          "triceps",
          "chest",
          "shoulders"
       ],
       "target":"lats"
    },
    {
       "bodyPart":"back",
       "equipment":"barbell",
       "gifUrl":"https://v2.exercisedb.io/image/vywuP77NQHdABz",
       "id":"0027",
       "instructions":[
          "Stand with your feet shoulder-width apart and knees slightly bent.",
          "Bend forward at the hips while keeping your back straight and chest up.",
          "Grasp the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
          "Pull the barbell towards your lower chest by retracting your shoulder blades and squeezing your back muscles.",
          "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
          "Repeat for the desired number of repetitions."
       ],
       "name":"barbell bent over row",
       "secondaryMuscles":[
          "biceps",
          "forearms"
       ],
       "target":"upper back"
    },
    {
       "bodyPart":"back",
       "equipment":"barbell",
       "gifUrl":"https://v2.exercisedb.io/image/e5kaW9TpUzvT1x",
       "id":"0034",
       "instructions":[
          "Lie down on a decline bench with your head lower than your hips and your feet secured.",
          "Hold a barbell with a pronated grip (palms facing away from you) and extend your arms straight above your chest.",
          "Lower the barbell behind your head in a controlled manner, keeping your arms slightly bent.",
          "Pause for a moment, then raise the barbell back to the starting position by contracting your lats.",
          "Repeat for the desired number of repetitions."
       ],
       "name":"barbell decline bent arm pullover",
       "secondaryMuscles":[
          "triceps",
          "chest"
       ],
       "target":"lats"
    },
    {
       "bodyPart":"back",
       "equipment":"barbell",
       "gifUrl":"https://v2.exercisedb.io/image/nkwZUKkdoP2E4F",
       "id":"0037",
       "instructions":[
          "Lie on a decline bench with your head lower than your hips and your feet secured.",
          "Hold a barbell with a wide grip and extend your arms straight above your chest.",
          "Lower the barbell behind your head in a controlled manner, keeping your arms straight.",
          "Pause for a moment, then raise the barbell back to the starting position.",
          "Repeat for the desired number of repetitions."
       ],
       "name":"barbell decline wide-grip pullover",
       "secondaryMuscles":[
          "triceps",
          "chest"
       ],
       "target":"lats"
    },
    {
       "bodyPart":"back",
       "equipment":"barbell",
       "gifUrl":"https://v2.exercisedb.io/image/djlL5p08YRShaC",
       "id":"0049",
       "instructions":[
          "Set up an incline bench at a 45-degree angle.",
          "Lie face down on the bench with your chest against the pad and your feet flat on the ground.",
          "Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart.",
          "Keep your back straight and your core engaged.",
          "Pull the barbell towards your chest, squeezing your shoulder blades together.",
          "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
          "Repeat for the desired number of repetitions."
       ],
       "name":"barbell incline row",
       "secondaryMuscles":[
          "biceps",
          "forearms"
       ],
       "target":"upper back"
    },
    {
       "bodyPart":"back",
       "equipment":"barbell",
       "gifUrl":"https://v2.exercisedb.io/image/RNPQwkGZqZH1km",
       "id":"0064",
       "instructions":[
          "Stand with your feet shoulder-width apart, knees slightly bent, and hold a barbell with one hand using an overhand grip.",
          "Bend forward at the hips, keeping your back straight and your head in a neutral position.",
          "Pull the barbell up towards your chest, keeping your elbow close to your body and squeezing your shoulder blades together.",
          "Lower the barbell back down to the starting position in a controlled manner.",
          "Repeat for the desired number of repetitions, then switch to the other arm."
       ],
       "name":"barbell one arm bent over row",
       "secondaryMuscles":[
          "biceps",
          "forearms"
       ],
       "target":"upper back"
    },
    {
       "bodyPart":"back",
       "equipment":"barbell",
       "gifUrl":"https://v2.exercisedb.io/image/kN0o-gNJL65nH5",
       "id":"0073",
       "instructions":[
          "Lie flat on a bench with your head at one end and your feet on the floor.",
          "Hold a barbell with a shoulder-width grip and extend your arms straight above your chest.",
          "Keeping your arms straight, lower the barbell behind your head in a controlled manner until you feel a stretch in your lats.",
          "Pause for a moment, then raise the barbell back to the starting position.",
          "Repeat for the desired number of repetitions."
       ],
       "name":"barbell pullover",
       "secondaryMuscles":[
          "chest",
          "triceps"
       ],
       "target":"lats"
    }
 ];