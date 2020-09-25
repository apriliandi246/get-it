const getStringQuerySearch = require("../../utils/string");


describe("object format", () => {
   it("should return object and has string value", () => {
      const currentLink = "/profile?name=farhan&age=20";
      const queryString = getStringQuerySearch("object", currentLink);

      expect(queryString).toMatchObject({
         name: "farhan",
         age: "20"
      });
   });

   it("should return empty object if query search is empty", () => {
      const currentLink = "/";
      const queryString = getStringQuerySearch("object", currentLink);

      expect(queryString).toMatchObject({});
   });
});


describe("array format", () => {
   it("should return array and has string value", () => {
      const currentLink = "/profile?name=farhan&age=20";
      const queryString = getStringQuerySearch("array", currentLink);

      expect(queryString).toEqual(expect.arrayContaining(["farhan", "20"]));
   });

   it("should return empty array if query search is empty", () => {
      const currentLink = "/";
      const queryString = getStringQuerySearch("array", currentLink);

      expect(queryString).toEqual(expect.arrayContaining([]));
   });
});


describe("array-object format", () => {
   it("should return array containing object and has string value", () => {
      const currentLink = "/profile?name=farhan&age=20";
      const queryString = getStringQuerySearch("arrayObject", currentLink);

      expect(queryString).toEqual(expect.arrayContaining([{ name: "farhan" }, { age: "20" }]));
   });

   it("should return empty array if query search is empty", () => {
      const currentLink = "/";
      const queryString = getStringQuerySearch("arrayObject", currentLink);

      expect(queryString).toMatchObject([]);
   });
});
