// Complete the js code
describe('Car and SportsCar Classes', () => {
  it('should create a Car and call getMakeModel method', () => {
    const car = new window.Car('Toyota', 'Corolla');
    expect(car.getMakeModel()).to.equal('Toyota Corolla');
  });

  it('should create a SportsCar and call getMakeModel and getTopSpeed methods', () => {
    const sportsCar = new window.SportsCar('Ferrari', 'Testarossa', 200);
    expect(sportsCar.getMakeModel()).to.equal('Ferrari Testarossa');
    expect(sportsCar.getTopSpeed()).to.equal(200);
  });
});
