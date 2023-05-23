import assert from "assert";
import TrafficLight from "../traffic";

/**
This class consists of four parts:

1. TrafficLight.colors: 一个静态的类属性.

2. lightIndex: a variable tracking the index of the current traffic light color.

3. light: a class property that returns the current traffic light color as a string.

4. next(): a function that changes the traffic light to the next light color.

*/

describe("src/testDemo/TrafficLight", function () {
  /**
   * 在子组中 验证 traffic colors
   * 1. 验证 colors 有3个状态
   * 2. 验证colors颜色正确并且顺序正确
   */
  describe("colors", function () {
    // 验证colors有3个状态
    it("has 3 states", function () {
      const traffic = new TrafficLight();
      assert.equal(3, TrafficLight.colors.length);
    });

    // 验证colors颜色正确并且顺序正确
    it("colors are in order", function () {
      const expectedLightOrder = ["green", "yellow", "red"];
      const traffic = new TrafficLight();
      for (let i = 0; i < expectedLightOrder.length; i++) {
        assert.equal(expectedLightOrder[i], TrafficLight.colors[i]);
      }
    });
  });

  /**
   * 在子组中 验证 traffic next()函数
   * 1. 验证 next() 函数是否正确的改变了 light
   * 2. 验证 light 是否正确的循环了 green --> yellow --> red --> green
   */
  describe("next()", function () {
    // 验证 next() 函数是否正确的改变了 light
    it("changes lights in order", function () {
      const traffic = new TrafficLight();
      for (let i = 0; i < TrafficLight.colors.length; i++) {
        assert.equal(traffic.light, TrafficLight.colors[i]);
        traffic.next();
      }
    });

    // 验证 light 是否正确的循环了 green --> yellow --> red --> green
    it("loops back to green", function () {
      const traffic = new TrafficLight();
      // Change the light 3x to go from green -> yellow -> red -> green
      for (let i = 0; i < 3; i++) {
        traffic.next();
      }
      assert.equal(traffic.light, TrafficLight.colors[0]);
    });
  });
});
