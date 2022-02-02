function animalCount(miles)
{
    const animalFirstDensity=10;
    const animalSecondDensity=50;
    const animalThirdDensity=100;

    if(miles<=10)
    {
        const count = miles * animalFirstDensity;
        return count;
    }
    else if(miles<=20)
    {
        const first10 = 10 * animalFirstDensity;
        const restMiles=miles-10;
        const second10=restMiles*animalSecondDensity;
        const totalanimals=first10+second10;

        return totalanimals;
    }else
    {
        const first10 = 10 * animalFirstDensity;
        const second10 = 10 * animalSecondDensity;
        const restMiles = miles - 20;
        const restDenseAnimals=restMiles*animalThirdDensity;
        const totalAnimals=first10+second10+restDenseAnimals;

        return totalAnimals;
    }
}

console.log(animalCount(35));