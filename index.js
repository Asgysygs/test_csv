import _ from 'lodash';

export default function solution(content) {
  // BEGIN

  // Data normalization
  const data = content.split('\r\n');
  const passengers = data.slice(1, data.length - 1);
  const normalizedData = passengers.map((passenger) => passenger.split(','));

  // Step 1
  const passengersCount = normalizedData[normalizedData.length - 1];
  const numberOfPassengers = Number(passengersCount[0]);
  console.log(`Количество пассажиров: ${numberOfPassengers}`);

  // Step 2
  const embarked = normalizedData.reduce((acc, passenger) => {
    if (passenger[11] !== '') {
      acc.push(passenger[11]);
    }
    return _.uniq(acc);
  }, []);

  console.log(`Все наименования портов посадки: ${embarked}`);

  // Step 3
  const males = normalizedData.filter((passenger) => passenger[5] === 'male');
  const females = normalizedData.filter(
    (passenger) => passenger[5] === 'female'
  );

  const malesCount = males.length / numberOfPassengers;
  const femalesCount = females.length / numberOfPassengers;

  console.log(
    `Процент мужчин: ${malesCount.toFixed(2) * 100}%, процент женщин: ${
      femalesCount.toFixed(2) * 100
    }%`
  );

  // Step 4
  const survivedPassengers = normalizedData.filter(
    (passenger) => Number(passenger[1]) === 1
  );

  const procentSurvived = survivedPassengers.length / numberOfPassengers;
  console.log(
    `Процент выживших пассажиров: ${procentSurvived.toFixed(2) * 100}%`
  );
  // END
}
