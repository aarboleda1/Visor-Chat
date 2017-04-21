/*
  Helper methods to perform logic handleIntent logic
*/

const handleIntent = (res) => {
  /*
    default to null in the case where user asks absurd question
  */
  if (res.entities.intent === undefined) { //todo: refactor to be more robust
    return 'I just forwarded your request to an employee, we will reach out to you shortly';
  } else {
    const { confidence, value } = res.entities.intent[0] || null;
    switch (confidence && value) {
      case confidence > 0.5 && 'greeting':
        return 'Hello! how can I help you today?';
      case confidence > 0.5 && 'taxes':
        //do some tax stuff logic
        //call 3rd party Tax API for logic 
        return 'To better understand your situation, I see that you make $100,000 this year';
      case confidence > 0.5 && 'unknown':
        return "Hmmm I don't know the answer to that'";
      default:
        //Add logic to pass message to employee
        //Forward message to company wide inbox
        return 'I did not understand that, I have forwarded your message to our employees and we will get back to you shortly';
    }
  }
};

module.exports = { handleIntent };