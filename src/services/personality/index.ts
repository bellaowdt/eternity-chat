import axios from "../../lib/axios";

import { CreatePersonalityService } from "./types";

const BASE_URL = "/api/v1";

export const createPersonality: CreatePersonalityService = ({ params }) => {
  return axios.get(`${BASE_URL}/CreatePersonality`, { params });
};
