const getIntegerQuerySearch = require('../../utils/int');

describe('object format', () => {
   it("should return object and has integer value", () => {
      const currentLink = "/page?pageStart=4&pageEnd=6";
      const queryString = getIntegerQuerySearch("object", currentLink);

      expect(queryString).toMatchObject({
         pageStart: 4,
         pageEnd: 6
      });
   });

   it("should return empty object if query search is empty", () => {
      const currentLink = "/";
      const queryString = getIntegerQuerySearch("object", currentLink);

      expect(queryString).toMatchObject({});
   });
});


describe("array format", () => {
   it("should return array and has integer value", () => {
      const currentLink = "/page?pageStart=4&pageEnd=6";
      const queryString = getIntegerQuerySearch("array", currentLink);

      expect(queryString).toEqual(expect.arrayContaining([4, 6]));
   });

   it("should return empty array if query search is empty", () => {
      const currentLink = "/";
      const queryString = getIntegerQuerySearch("array", currentLink);

      expect(queryString).toEqual(expect.arrayContaining([]));
   });
});


describe("array-object format", () => {
   it("should return array containing object and has string value", () => {
      const currentLink = "/page?pageStart=4&pageEnd=6";
      const queryString = getIntegerQuerySearch("arrayObject", currentLink);

      expect(queryString).toEqual(expect.arrayContaining([{ pageStart: 4 }, { pageEnd: 6 }]));
   });

   it("should return empty array if query search is empty", () => {
      const currentLink = "/";
      const queryString = getIntegerQuerySearch("arrayObject", currentLink);

      expect(queryString).toMatchObject([]);
   });
});
