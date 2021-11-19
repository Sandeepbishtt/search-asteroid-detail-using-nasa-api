import Store from "../Redux/Store";
import { addData, showDetailReducer } from "../Redux/SliceReducer";

test("Should set the data ", () => {
  Store.dispatch(
    addData([{
        links: {next: 'http://www.neowsapp.com/rest/v1/neo/browse?page=1&…&api_key=7P8Tdob4dz1NHYcEN1LXXNKCpKfN0x4kJozhcvFW', self: 'http://www.neowsapp.com/rest/v1/neo/browse?page=0&…&api_key=7P8Tdob4dz1NHYcEN1LXXNKCpKfN0x4kJozhcvFW'},
        near_earth_objects:{
            absolute_magnitude_h: 10.43,
            designation: "433",
            id: "2000433",
            is_potentially_hazardous_asteroid: false,
            is_sentry_object: false,
            name: "433 Eros (A898 PA)",
            name_limited: "Eros",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2000433",
            neo_reference_id: "2000433",
        },
        page: {size: 20, total_elements: 27917, total_pages: 1396, number: 0}
}])
  );

  let state = Store.getState().data;
  const value = state.data[0].near_earth_objects
  expect(value?.name).toBe("433 Eros (A898 PA)");
  expect(value?.name_limited).toBe("Eros");
  expect(value?.nasa_jpl_url).toBe("http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2000433");
}); 

test('check the hideLoading reducer',()=>{
  Store.dispatch(showDetailReducer())
  const state:any  = Store.getState().data
  const value =  state.showDetail
  expect(value).toBe(true)
  })