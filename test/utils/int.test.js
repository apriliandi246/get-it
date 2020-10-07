const getIntegerQuerySearch = require("../../utils/int");


it("return error when format input is wrong", () => {
   const currentLink = "/page?pageStart=4&pageEnd=6";

   expect(() => {
      getIntegerQuerySearch("word", currentLink);
   }).toThrow();
});


describe("object format", () => {
   it("should return object and has integer value", () => {
      const currentLink = "/page?pageStart=4&pageEnd=6";
      const querySearch = getIntegerQuerySearch("object", currentLink);

      expect(querySearch).toMatchObject({
         pageStart: 4,
         pageEnd: 6
      });
   });

   it("should return empty object if query search is empty", () => {
      const currentLink = "/";
      const querySearch = getIntegerQuerySearch("object", currentLink);

      expect(querySearch).toMatchObject({});
   });

   it("should return object and has null value if value from query string is not integer", () => {
      const currentLink = "/page?pageStart=4.2&pageEnd=6.2&pageName=blog";
      const querySearch = getIntegerQuerySearch("object", currentLink);

      expect(querySearch).toMatchObject({
         pageStart: null,
         pageEnd: null,
         pageName: null
      });
   });
});


describe("array format", () => {
   it("should return array and has integer value", () => {
      const currentLink = "/page?pageStart=4&pageEnd=6";
      const querySearch = getIntegerQuerySearch("array", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining([4, 6]));
   });

   it("should return empty array if query search is empty", () => {
      const currentLink = "/";
      const querySearch = getIntegerQuerySearch("array", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining([]));
   });

   it("should return array containing null value for each query search name", () => {
      const currentLink = "/page?pageStart=4.2&pageEnd=6.2&pageName=blog";
      const querySearch = getIntegerQuerySearch("array", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining([null, null, null]));
   });
});


describe("array-object format", () => {
   it("should return array containing object and has string value", () => {
      const currentLink = "/page?pageStart=4&pageEnd=6";
      const querySearch = getIntegerQuerySearch("arrayObject", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining([{ pageStart: 4 }, { pageEnd: 6 }]));
   });

   it("should return empty array if query search is empty", () => {
      const currentLink = "/";
      const querySearch = getIntegerQuerySearch("arrayObject", currentLink);

      expect(querySearch).toMatchObject([]);
   });

   it("should return array containing null value for each query search name", () => {
      const currentLink = "/page?pageStart=4.2&pageEnd=6.2&pageName=blog";
      const querySearch = getIntegerQuerySearch("arrayObject", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining(
         [
            { pageStart: null },
            { pageEnd: null },
            { pageName: null }
         ]
      ));
   });
});
