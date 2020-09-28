const getIntegerQuerySearch = require("../../utils/int");

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

   it("should return object and has null value if value from query string is not integer", () => {
      const currentLink = "/page?pageStart=4.2&pageEnd=6.2&pageName=blog";
      const queryString = getIntegerQuerySearch("object", currentLink);

      expect(queryString).toMatchObject({
         pageStart: null,
         pageEnd: null,
         pageName: null
      });
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

   it("should return array containing null value for each query search name", () => {
      const currentLink = "/page?pageStart=4.2&pageEnd=6.2&pageName=blog";
      const queryString = getIntegerQuerySearch("array", currentLink);

      expect(queryString).toEqual(expect.arrayContaining([null, null, null]));
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

   it("should return array containing null value for each query search name", () => {
      const currentLink = "/page?pageStart=4.2&pageEnd=6.2&pageName=blog";
      const queryString = getIntegerQuerySearch("arrayObject", currentLink);

      expect(queryString).toEqual(expect.arrayContaining([{ pageStart: null }, { pageEnd: null }, { pageName: null }]));
   });
});
