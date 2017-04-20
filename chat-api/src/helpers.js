/*
  Helper methods to perform logic handleIntent logic
*/

const handleIntent = (res) => {
  console.log(res);
  const { confidence, value } = res.entities.intent[0] || null; // default to null in the case where user asks absurd question 
  switch (confidence && value) {
    case confidence > 0.5 && 'greeting':
      return 'hello';
    case confidence > 0.5 && 'taxes':
      //do some tax stuff logic
      return 'taxes are due soon!';
    case confidence > 0.5 && 'unknown':
      return "Hmmm I don't know the answer to that'";
    default:
      //Add logic to pass message to employee
      //Forward message to company wide inbox
      return 'I did not understand that, I have forwarded your message to our employees and we will get back to you shortly';

  }
};

module.exports = { handleIntent };