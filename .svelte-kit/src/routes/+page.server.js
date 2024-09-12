import fetchJson from "$lib/fetch-json";
import { error } from '@sveltejs/kit';

export async function load({ params }) {
const id = 15; 
const url = `https://fdnd.directus.app/items/person/?filter={"id":{"_eq":${id}}}`;


  const response = await fetchJson(url);

  // If the persons array is empty, throw a 404 error
  if (!response.data || response.data.length === 0) {
    throw error(404, `Person with ID ${params.id} not found`);
  }

  return {
    persons: response.data,
  };
}