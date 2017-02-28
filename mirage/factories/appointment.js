import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  status() { return faker.random.arrayElement(['pending', 'canceled']); },
});
