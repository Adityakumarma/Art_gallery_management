import commonAPI from "./commonApi"
import BASEURL from "./serviceURL"

// Used in Add Artwork form (Artist uploads new artwork)
export const addArtworkAPI = async (reqBody) => {
    return await commonAPI("POST", `${BASEURL}/artworks`, reqBody)
}

// Used to fetch a specific artwork for viewing or editing
export const getArtworkAPI = async (id) => {
    return await commonAPI("GET", `${BASEURL}/artworks/${id}`, {})
}

// Used in Artist Dashboard to view all uploaded artworks
export const getAllArtworksAPI = async () => {
    return await commonAPI("GET", `${BASEURL}/artworks`, "")
}

// Used when Artist edits artwork details
export const updateArtworkAPI = async (id, reqBody) => {
    return await commonAPI("PUT", `${BASEURL}/artworks/${id}`, reqBody)
}

// Used when Artist removes their artwork
export const deleteArtworkAPI = async (id) => {
    return await commonAPI("DELETE", `${BASEURL}/artworks/${id}`, {})
}
