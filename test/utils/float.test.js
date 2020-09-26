const getFloatQuerySearch = require('../../utils/float');


describe("object format", () => {
   it('should return object and has float value', () => {
      const currentLink = "/number?value=1.2&num1=24.6&num2=246.2";
      const queryString = getFloatQuerySearch('object', currentLink);

      expect(queryString).toMatchObject({
         value: 1.2,
         num1: 24.6,
         num2: 246.2
      });
   });

   it("should return empty object if query search is empty", () => {
      const currentLink = "/";
      const queryString = getFloatQuerySearch("object", currentLink);

      expect(queryString).toMatchObject({});
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
      const queryString = getFloatQuerySearch("array", currentLink);

      expect(queryString).toEqual(expect.arrayContaining([1.2, 24.6, 246.2]));
   });

   it("should return empty array if query search is empty", () => {
      const currentLink = "/";
      const queryString = getFloatQuerySearch("array", currentLink);

      expect(queryString).toEqual(expect.arrayContaining([]));
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
      const queryString = getFloatQuerySearch("arrayObject", currentLink);

      expect(queryString).toEqual(expect.arrayContaining([
         { value: 1.2 }, { num1: 24.6 }, { num2: 246.2 }
      ]));
   });

   it("should return empty array if query search is empty", () => {
      const currentLink = "/";
      const queryString = getFloatQuerySearch("arrayObject", currentLink);

      expect(queryString).toMatchObject([]);
   });

   it("should return array containing null value for each query search name", () => {
      const currentLink = "/number?value=1&num1=24&num2=246";
      const queryString = getFloatQuerySearch("arrayObject", currentLink);

      expect(queryString).toEqual(expect.arrayContaining([{ value: null }, { num1: null }, { num2: null }]));
   });
});
