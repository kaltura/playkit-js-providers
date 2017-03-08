//@flow
export default class Tanya {
  getConfig(partnerId: string): Object {
    return {
      x: 1,
      y: 2,
      partnerId: partnerId + " hello"
    };
  }
}
