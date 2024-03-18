function Dice({numsides=6})
{
const roll=Math.floor(Math.random()*numsides)+1;

return (
    <>
    <h1>{numsides} sided Dice roll: {roll}</h1>
    </>
);
}

export default Dice;