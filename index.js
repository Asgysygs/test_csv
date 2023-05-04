import _ from 'lodash';

export default function solution(content) {
  // BEGIN

  // Data normalization
  const data = content.split('\r\n');
  const passengers = data.slice(1, data.length - 1);
  const normalizedData = passengers.map((passenger) => passenger.split(','));

  // Step 1
  const passengersCount = normalizedData[normalizedData.length - 1];
  console.log(`Количество пассажиров: ${passengersCount[0]}`);

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

  const malesCount = males.length / Number(passengersCount[0]);
  const femalesCount = females.length / Number(passengersCount[0]);

  console.log(
    `Процент мужчин: ${malesCount.toFixed(2) * 100}%, процент женщин: ${
      femalesCount.toFixed(2) * 100
    }%`
  );

  // END
}
