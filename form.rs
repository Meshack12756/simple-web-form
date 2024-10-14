use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(age: i32) -> String {
    if age <= 18 {
        return "You're a young star! 🌟".to_string();
    } else if (age <= 35) {
        return "You're in your prime! 🚀".to_string();
    } else if (age <= 50) {
        return "Age is just a number! 🌟".to_string();
    } else {
        return "Wisdom comes with age! 🌟".to_string();
    }
}
