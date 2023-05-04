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

  // END
}
