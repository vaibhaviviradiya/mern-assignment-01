
function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("courses")) {
        return "We offer BSc IT, BCA, MCA, and MSc IT programs.";
    } else if (input.includes("admission")) {
        return "Admissions are open until July 31st";
    } else if (input.includes("fees")) {
        return "The fee structure of course. BSc IT : ₹25,000 per sem";
    } else if (input.includes("hostel")) {
        return "Yes, we provide hostel facilities for both boys and girls.";
    } else if (input.includes("bye") || input.includes("exit")) {
        return "Goodbye!";
    } else {
        return "I'm sorry, I didn't understand that. Can you please rephrase?";
    }
}

module.exports = { getBotResponse };
