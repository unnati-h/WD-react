function ConditionalDice({numsides=6})
{
const roll1=Math.floor(Math.random()*numsides)+1;
const roll2=Math.floor(Math.random()*numsides)+1;
const win= roll1===roll2;
return (
    <>
    <center>
    <h1>2 {numsides} sided Dice roll</h1>
    <h1>roll 1: {roll1}</h1>
    <h1>roll 2: {roll2}</h1>
    <h2 style={{color:win?'green':'red'}}>{win?'You Win :)':'You Lose :('}</h2>
    </center>
    </>
);
}

export default ConditionalDice;