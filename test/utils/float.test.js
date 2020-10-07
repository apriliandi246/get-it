const getFloatQuerySearch = require("../../utils/float");


it("return error when format input is wrong", () => {
   const currentLink = "/number?value=1&num1=24&num2=246";

   expect(() => {
      getFloatQuerySearch("exel", currentLink);
   }).toThrow();
});


describe("object format", () => {
   it("should return object and has float value", () => {
      const currentLink = "/number?value=1.2&num1=24.6&num2=246.2";
      const querySearch = getFloatQuerySearch("object", currentLink);

      expect(querySearch).toMatchObject({
         value: 1.2,
         num1: 24.6,
         num2: 246.2
      });
   });

   it("should return empty object if query search is empty", () => {
      const currentLink = "/";
      const querySearch = getFloatQuerySearch("object", currentLink);

      expect(querySearch).toMatchObject({});
   });

   it("should return object and has null value if value from query string is not float", () => {
      const currentLink = "/number?value=1&num1=24&num2=246";
      const queryString = getFloatQuerySearch("object", currentLink);

      expect(queryString).toMatchObject({
         value: null,
         num1: null,
         num2: null
      });
   });
});


describe("array format", () => {
   it("should return array and has string value", () => {
      const currentLink = "/number?value=1.2&num1=24.6&num2=246.2";
      const querySearch = getFloatQuerySearch("array", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining([1.2, 24.6, 246.2]));
   });

   it("should return empty array if query search is empty", () => {
      const currentLink = "/";
      const querySearch = getFloatQuerySearch("array", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining([]));
   });

   it("should return array containing null value for each query search name", () => {
      const currentLink = "/number?value=1&num1=24&num2=246";
      const queryString = getFloatQuerySearch("array", currentLink);

      expect(queryString).toEqual(expect.arrayContaining([null, null, null]));
   });
});


describe("array-object format", () => {
   it("should return array containing object and has string value", () => {
      const currentLink = "/number?value=1.2&num1=24.6&num2=246.2";
      const querySearch = getFloatQuerySearch("arrayObject", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining([
         { value: 1.2 }, { num1: 24.6 }, { num2: 246.2 }
      ]));
   });

   it("should return empty array if query search is empty", () => {
      const currentLink = "/";
      const querySearch = getFloatQuerySearch("arrayObject", currentLink);

      expect(querySearch).toMatchObject([]);
   });

   it("should return array containing null value for each query search name", () => {
      const currentLink = "/number?value=1&num1=24&num2=246";
      const querySearch = getFloatQuerySearch("arrayObject", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining([
         { value: null },
         { num1: null },
         { num2: null }
      ]));
   });
});
