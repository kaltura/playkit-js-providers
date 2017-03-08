import chai from 'chai';
import Tanya from '../src/tanya'

chai.should();

let tanya;

describe.only('tanya', () => {

  before(() => {
    tanya = new Tanya();
  });

  beforeEach(() => {

  });

  it('should return the correct config', () => {
    let config = tanya.getConfig("test");
    config.should.deep.equal({x: 1, y: 2, partnerId: "test hello"});

    config = tanya.getConfig(null);
    config.should.deep.equal({x: 1, y: 2, partnerId: " hello"});
  });

  afterEach(() => {

  });

  after(() => {

  });

});
