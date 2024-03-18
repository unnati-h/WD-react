function Dice2({numsides=6})
{
const roll1=Math.floor(Math.random()*numsides)+1;
const roll2=Math.floor(Math.random()*numsides)+1;
return (
    <>
    <h1>2 {numsides} sided Dice roll</h1>
    <h1>roll 1: {roll1}</h1>
    <h1>roll 2: {roll2}</h1>
    </>
);
}

export default Dice2;