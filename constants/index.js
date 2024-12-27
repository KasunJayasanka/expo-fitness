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

export const demoExercises = [
   // Back
   {
     bodyPart: "back",
     equipment: "barbell",
     gifUrl: "https://v2.exercisedb.io/image/jU6NpUKegmk-Vb",
     id: "001",
     name: "barbell bent over row",
     target: "upper back",
     secondaryMuscles: ["biceps", "forearms"],
     instructions: [
       "Stand with your feet shoulder-width apart.",
       "Grasp the barbell with an overhand grip.",
       "Pull the barbell towards your lower chest.",
     ],
   },
   {
     bodyPart: "back",
     equipment: "cable",
     gifUrl: "https://v2.exercisedb.io/image/NsXm562QtR8qwa",
     id: "002",
     name: "lat pulldown",
     target: "lats",
     secondaryMuscles: ["biceps", "shoulders"],
     instructions: [
       "Sit at the machine and grasp the bar with a wide grip.",
       "Pull the bar down to your chest.",
       "Slowly return to the starting position.",
     ],
   },
 
   // Cardio
   {
     bodyPart: "cardio",
     equipment: "body weight",
     gifUrl: "https://v2.exercisedb.io/image/AgxtmC2soNF8N4",
     id: "003",
     name: "air bike",
     target: "cardio",
     secondaryMuscles: ["abs", "hip flexors"],
     instructions: [
       "Lie flat on your back with your hands behind your head.",
       "Pedal your legs in the air while twisting your torso.",
     ],
   },
   {
     bodyPart: "cardio",
     equipment: "body weight",
     gifUrl: "https://v2.exercisedb.io/image/IQFKXEhszvQ3Ea",
     id: "004",
     name: "jumping jacks",
     target: "cardio",
     secondaryMuscles: ["legs", "shoulders"],
     instructions: [
       "Stand upright with your legs together and arms at your sides.",
       "Jump while spreading your legs and raising your arms.",
       "Return to the starting position.",
     ],
   },
 
   // Chest
   {
     bodyPart: "chest",
     equipment: "barbell",
     gifUrl: "https://v2.exercisedb.io/image/e5kaW9TpUzvT1x",
     id: "005",
     name: "bench press",
     target: "pectorals",
     secondaryMuscles: ["triceps", "shoulders"],
     instructions: [
       "Lie flat on a bench and hold the barbell with an overhand grip.",
       "Lower the barbell to your chest.",
       "Press the barbell back to the starting position.",
     ],
   },
   {
     bodyPart: "chest",
     equipment: "machine",
     gifUrl: "https://v2.exercisedb.io/image/-wHUQw53XSKLJu",
     id: "006",
     name: "chest fly",
     target: "pectorals",
     secondaryMuscles: ["shoulders"],
     instructions: [
       "Sit on the chest fly machine and grip the handles.",
       "Bring the handles together in front of your chest.",
       "Slowly return to the starting position.",
     ],
   },
 
   // Lower Arms
   {
     bodyPart: "lower arms",
     equipment: "dumbbell",
     gifUrl: "https://v2.exercisedb.io/image/LBmdik3oW66urs",
     id: "007",
     name: "wrist curl",
     target: "forearms",
     secondaryMuscles: ["wrists"],
     instructions: [
       "Sit with a dumbbell in your hand, palm facing up.",
       "Curl your wrist upward.",
       "Return to the starting position.",
     ],
   },
   {
     bodyPart: "lower arms",
     equipment: "barbell",
     gifUrl: "https://v2.exercisedb.io/image/BfpmvLmnmbykgl",
     id: "008",
     name: "reverse wrist curl",
     target: "forearms",
     secondaryMuscles: ["wrists"],
     instructions: [
       "Hold a barbell with an overhand grip.",
       "Curl your wrists upward.",
       "Return to the starting position.",
     ],
   },
 
   // Lower Legs
   {
     bodyPart: "lower legs",
     equipment: "body weight",
     gifUrl: "https://v2.exercisedb.io/image/Tp3tNkkB1CLDlL",
     id: "009",
     name: "standing calf raise",
     target: "calves",
     secondaryMuscles: ["ankles"],
     instructions: [
       "Stand with your feet shoulder-width apart.",
       "Raise your heels off the ground and lower slowly.",
     ],
   },
   {
     bodyPart: "lower legs",
     equipment: "machine",
     gifUrl: "https://v2.exercisedb.io/image/AgxtmC2soNF8N4",
     id: "010",
     name: "seated calf raise",
     target: "calves",
     secondaryMuscles: ["ankles"],
     instructions: [
       "Sit on the machine with the pads resting on your knees.",
       "Raise your heels off the ground.",
       "Return to the starting position.",
     ],
   },
 
   // Neck
   {
     bodyPart: "neck",
     equipment: "body weight",
     gifUrl: "https://v2.exercisedb.io/image/ATCt4cAzd-c3Bt",
     id: "011",
     name: "neck extension",
     target: "neck",
     secondaryMuscles: ["trapezius"],
     instructions: [
       "Sit upright and gently tilt your head backward.",
       "Return to the starting position.",
     ],
   },
   {
     bodyPart: "neck",
     equipment: "body weight",
     gifUrl: "https://v2.exercisedb.io/image/IQFKXEhszvQ3Ea",
     id: "012",
     name: "neck flexion",
     target: "neck",
     secondaryMuscles: ["trapezius"],
     instructions: [
       "Sit upright and tilt your head forward.",
       "Return to the starting position.",
     ],
   },
 
   // Shoulders
   {
     bodyPart: "shoulders",
     equipment: "barbell",
     gifUrl: "https://v2.exercisedb.io/image/jU6NpUKegmk-Vb",
     id: "013",
     name: "overhead press",
     target: "deltoids",
     secondaryMuscles: ["triceps"],
     instructions: [
       "Hold the barbell at shoulder height.",
       "Press the barbell overhead.",
       "Return to the starting position.",
     ],
   },
   {
     bodyPart: "shoulders",
     equipment: "dumbbell",
     gifUrl: "https://v2.exercisedb.io/image/NsXm562QtR8qwa",
     id: "014",
     name: "lateral raise",
     target: "deltoids",
     secondaryMuscles: ["trapezius"],
     instructions: [
       "Hold a dumbbell in each hand by your sides.",
       "Lift the dumbbells to shoulder height.",
       "Lower them back down.",
     ],
   },
 
   // Upper Arms
   {
     bodyPart: "upper arms",
     equipment: "dumbbell",
     gifUrl: "https://v2.exercisedb.io/image/ImPiK8St-p5Qok",
     id: "015",
     name: "bicep curl",
     target: "biceps",
     secondaryMuscles: ["forearms"],
     instructions: [
       "Hold a dumbbell in each hand with palms facing up.",
       "Curl the dumbbells toward your shoulders.",
     ],
   },
   {
     bodyPart: "upper arms",
     equipment: "dumbbell",
     gifUrl: "https://v2.exercisedb.io/image/Tp3tNkkB1CLDlL",
     id: "016",
     name: "tricep kickback",
     target: "triceps",
     secondaryMuscles: ["shoulders"],
     instructions: [
       "Hold a dumbbell in each hand.",
       "Extend your arms backward.",
       "Return to the starting position.",
     ],
   },
 
   // Upper Legs
   {
     bodyPart: "upper legs",
     equipment: "body weight",
     gifUrl: "https://v2.exercisedb.io/image/AgxtmC2soNF8N4",
     id: "017",
     name: "bodyweight squat",
     target: "quads",
     secondaryMuscles: ["glutes", "hamstrings"],
     instructions: [
       "Stand with your feet shoulder-width apart.",
       "Lower your hips down and back into a squat.",
     ],
   },
   {
     bodyPart: "upper legs",
     equipment: "barbell",
     gifUrl: "https://v2.exercisedb.io/image/AgxtmC2soNF8N4",
     id: "018",
     name: "barbell lunge",
     target: "quads",
     secondaryMuscles: ["glutes", "hamstrings"],
     instructions: [
       "Hold a barbell on your shoulders.",
       "Step forward and lower your body into a lunge.",
       "Push back to the starting position.",
     ],
   },
 
   // Waist
   {
     bodyPart: "waist",
     equipment: "body weight",
     gifUrl: "https://v2.exercisedb.io/image/BfpmvLmnmbykgl",
     id: "019",
     name: "plank",
     target: "abs",
     secondaryMuscles: ["obliques", "lower back"],
     instructions: [
       "Get into a push-up position with your weight on your forearms.",
       "Hold your body in a straight line.",
     ],
   },
   {
     bodyPart: "waist",
     equipment: "body weight",
     gifUrl: "https://v2.exercisedb.io/image/IQFKXEhszvQ3Ea",
     id: "020",
     name: "crunch",
     target: "abs",
     secondaryMuscles: ["obliques"],
     instructions: [
       "Lie on your back with your knees bent.",
       "Lift your shoulders off the ground.",
       "Lower back down.",
     ],
   },
 ];
 