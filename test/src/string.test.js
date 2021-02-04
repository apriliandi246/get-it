const getStringQuerySearch = require("../../utils/string");

it("return error when format input is wrong", () => {
   const currentLink = "/number?value=1&num1=24&num2=246";

   expect(() => {
      getStringQuerySearch("point", currentLink);
   }).toThrow();
});

describe("object format", () => {
   it("should return object and has string value", () => {
      const currentLink = "/profile?name=farhan&age=20";
      const querySearch = getStringQuerySearch("object", currentLink);

      expect(querySearch).toMatchObject({
         name: "farhan",
         age: "20",
      });
   });

   it("should return null value when query search is empty", () => {
      const currentLink = "/profile?name=&age=";
      const querySearch = getStringQuerySearch("object", currentLink);

      expect(querySearch).toMatchObject({
         name: undefined,
         age: undefined,
      });
   });

   it("should return empty object if query search is empty", () => {
      const currentLink = "/";
      const querySearch = getStringQuerySearch("object", currentLink);

      expect(querySearch).toMatchObject({});
   });
});

describe("array format", () => {
   it("should return array and has string value", () => {
      const currentLink = "/profile?name=farhan&age=20";
      const querySearch = getStringQuerySearch("array", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining(["farhan", "20"]));
   });

   it("should return null value when query search is empty", () => {
      const currentLink = "/profile?name=&age=";
      const querySearch = getStringQuerySearch("array", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining([null, null]));
   });

   it("should return empty array if query search is empty", () => {
      const currentLink = "/";
      const querySearch = getStringQuerySearch("array", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining([]));
   });
});

describe("array-object format", () => {
   it("should return array containing object and has string value", () => {
      const currentLink = "/profile?name=farhan&age=20";
      const querySearch = getStringQuerySearch("arrayObject", currentLink);

      expect(querySearch).toEqual(
         expect.arrayContaining([{ name: "farhan" }, { age: "20" }])
      );
   });

   it("should return null value when query search is empty", () => {
      const currentLink = "/profile?name=&age=";
      const querySearch = getStringQuerySearch("arrayObject", currentLink);

      expect(querySearch).toEqual(
         expect.arrayContaining([{ name: null }, { age: null }])
      );
   });

   it("should return empty array if query search is empty", () => {
      const currentLink = "/";
      const querySearch = getStringQuerySearch("arrayObject", currentLink);

      expect(querySearch).toEqual(expect.arrayContaining([]));
   });
});
