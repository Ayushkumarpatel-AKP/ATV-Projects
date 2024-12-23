function calculateRecommendations() {
    // User ke input ko variables me store kar rahe hain
    const age = parseInt(document.getElementById("age").value); // Umar ko integer me convert kar rahe hain
    const weight = parseFloat(document.getElementById("weight").value); // Weight ko float me convert kar rahe hain
    const height = parseFloat(document.getElementById("height").value); // Height ko float me convert kar rahe hain
    const gender = document.getElementById("gender").value; // Gender ko variable me store kar rahe hain
    const activityLevel = document.getElementById("activityLevel").value; // Activity level ko variable me store kar rahe hain
    const disease = document.getElementById("disease").value; // Disease ko variable me store kar rahe hain

    // Input validation check
    if (isNaN(age) || isNaN(weight) || isNaN(height) || !gender || !activityLevel || !disease) {
        alert("Please fill in all fields before proceeding."); // Agar koi field khali hai toh user ko alert karo
        return; // Function ko yahin rok do
    }

    // BMR (Basal Metabolic Rate) calculation karna
    let bmr;
    if (gender === "male") { // Agar male hai toh
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age); // Male ka formula
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age); // Female ka formula
    }

    // Activity level ke hisaab se calorie intake adjust karna
    let calorieIntake;
    switch (activityLevel) {
        case "sedentary": // Agar sedentary hai
            calorieIntake = bmr * 1.2; // BMR ko 1.2 se multiply karna
            break;
        case "light": // Agar light activity hai
            calorieIntake = bmr * 1.375; // BMR ko 1.375 se multiply karna
            break;
        case "moderate": // Agar moderate activity hai
            calorieIntake = bmr * 1.55; // BMR ko 1.55 se multiply karna
            break;
        case "active": // Agar active hai
            calorieIntake = bmr * 1.725; // BMR ko 1.725 se multiply karna
            break;
        default: // Agar koi bhi match nahi karta
            calorieIntake = bmr * 1.2; // Default value
    }

    // Workout recommendations banana age, height aur weight ke hisaab se
    let workoutRecommendation;
    if (age < 18) { // Agar 18 se kam umar hai
        workoutRecommendation = "Focus on bodyweight exercises like push-ups, pull-ups, and squats."; // Bodyweight exercises pe focus karna
    } else if (age >= 18 && age < 30) { // Agar 18 se 30 ke beech hai
        if (weight < 60) { // Agar weight 60 se kam hai
            workoutRecommendation = "Try light weight training with dumbbells and high-rep workouts."; // Light weight training try karo
        } else if (weight >= 60 && weight < 80) { // Agar weight 60 se 80 ke beech hai
            workoutRecommendation = "Incorporate compound exercises like bench press, squats, and deadlifts."; // Compound exercises include karo
        } else { // Agar weight 80 se zyada hai
            workoutRecommendation = "Focus on strength training with lower reps and higher weights."; // Strength training pe focus karo
        }
    } else if (age >= 30 && age < 50) { // Agar 30 se 50 ke beech hai
        if (weight < 60) { // Agar weight 60 se kam hai
            workoutRecommendation = "Incorporate cardio workouts like jogging or cycling."; // Cardio workouts include karo
        } else if (weight >= 60 && weight < 80) { // Agar weight 60 se 80 ke beech hai
            workoutRecommendation = "Include a mix of cardio and moderate weight training."; // Cardio aur moderate weight training mix karo
        } else { // Agar weight 80 se zyada hai
            workoutRecommendation = "Focus on lower-impact exercises like swimming and resistance training."; // Lower-impact exercises pe focus karo
        }
    } else { // Agar 50 se zyada umar hai
        if (weight < 60) { // Agar weight 60 se kam hai
            workoutRecommendation = "Focus on light stretching, yoga, and walking."; // Light stretching, yoga aur walking pe focus karo
        } else if (weight >= 60 && weight < 80) { // Agar weight 60 se 80 ke beech hai
            workoutRecommendation = "Incorporate low-impact exercises like walking and light resistance training."; // Low-impact exercises include karo
        } else { // Agar weight 80 se zyada hai
            workoutRecommendation = "Focus on flexibility and balance exercises like tai chi."; // Flexibility aur balance exercises pe focus karo
        }
    }

    // Disease ke hisaab se avoidance suggestions dena
    let avoidanceRecommendation = "No specific dietary or workout restrictions."; // Default recommendation
    if (disease === "diabetes") { // Agar diabetes hai
        avoidanceRecommendation = "Avoid high-sugar foods. Include complex carbs and regular, moderate exercise."; // High-sugar foods se bacho
    } else if (disease === "hypertension") { // Agar hypertension hai
        avoidanceRecommendation = "Limit salt intake and avoid heavy weightlifting. Prioritize cardio and yoga."; // Salt kam karo aur heavy lifting se bacho
    } else if (disease === "cholesterol") { // Agar cholesterol hai
        avoidanceRecommendation = "Avoid fried and high-fat foods. Emphasize cardio and high-fiber foods."; // Fried aur high-fat foods se bacho
    }

    // Recommendations ko display karna
    document.getElementById("calorieRecommendation").innerText = `Daily Calorie Intake: ${Math.round(calorieIntake)}`; // Calorie intake show karna
    document.getElementById("workoutRecommendation").innerText = `Workout Recommendation: ${workoutRecommendation}`; // Workout recommendation show karna
    document.getElementById("avoidanceRecommendation").innerText = `Dietary Avoidance: ${avoidanceRecommendation}`; // Avoidance recommendation show karna

    // Suggestions aur health tips section dikhana
    document.getElementById("suggestions").style.display = "block"; // Suggestions section dikhana
    document.getElementById("healthTips").style.display = "block"; // Health tips section dikhana
}
