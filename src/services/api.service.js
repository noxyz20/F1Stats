import axios from "axios";
export default class ApiService {
  baseUrl = " https://api.openf1.org/v1/";

  /**
   * Retrieves the list of meetings from the API.
   * @returns {Promise} A promise that resolves with the response data.
   */
  async getMeetings() {
    return await axios.get(this.baseUrl + "meetings");
  }

  /**
   * Retrieves meetings by year.
   * @param {number} year - The year for which to retrieve meetings.
   * @returns {Promise} - A promise that resolves with the meetings data.
   */
  async getMeetingsByYear(year) {
    return await axios.get(this.baseUrl + "meetings?year=" + year);
  }

  /**
   * Retrieves the session by week and race.
   *
   * @param {string} country_key - The country key.
   * @param {number} year - The year.
   * @returns {Promise} - A promise that resolves to the session data.
   */
  async getSessionByWeekRace(country_key, year) {
    return await axios.get(
      this.baseUrl + "sessions?country_key=" + country_key + "&year=" + year
    );
  }

  /**
   * Retrieves a session by its key.
   *
   * @param {string} key - The session key.
   * @returns {Promise} A promise that resolves with the session data.
   */
  async getSessionByKey(key) {
    return await axios
      .get(this.baseUrl + "sessions?session_key=" + key)
      .then((response) => {
        return response.data[0];
      });
  }

  /**
   * Retrieves the latest driver position based on the provided session key.
   * @param {string} key - The session key used to retrieve the driver position.
   * @returns {Promise<Object>} - A promise that resolves to an object containing the latest driver position data.
   */
  async getLatestDriverPosition(key) {
    return await axios
      .get(this.baseUrl + "position?session_key=" + key)
      .then((response) => {
        let latestData = {};
        response.data.forEach((item) => {
          if (
            !latestData[item.driver_number] ||
            latestData[item.driver_number].date < item.date
          ) {
            latestData[item.driver_number] = item;
          }
        });

        return Object.values(latestData).sort((a, b) => {
          return a.position - b.position;
        });
      });
  }

  /**
   * Retrieves the driver position timeline based on the provided session key.
   * @param {string} key - The session key used to retrieve the driver position timeline.
   * @returns {Promise<Array>} - A promise that resolves to an array of driver position objects sorted by date in descending order.
   */
  async getDriverPositionTimeLine(key) {
    return await axios
      .get(this.baseUrl + "position?session_key=" + key)
      .then((response) => {
        return response.data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      });
  }

/**
 * Retrieves the driver page data based on the provided key and number.
 * @param {string} key - The session key.
 * @param {number} number - The driver number.
 * @returns {Promise<Object>} A promise that resolves to the driver page data.
 */
  async getDriverPage(key, number) {
    return await axios
      .get(
        this.baseUrl + "drivers?session_key=" + key + "&driver_number=" + number
      )
      .then((response) => {
        return response.data[0];
      });
  }

/**
 * Retrieves laps data for a given session key.
 *
 * @param {string} key - The session key.
 * @returns {Promise<Array>} - A promise that resolves to an array of laps data.
 */
  async getLaps(key) {
    return await axios
      .get(this.baseUrl + "laps?session_key=" + key)
      .then((response) => {
        return response.data;
      });
  }

/**
 * Retrieves laps data for a specific driver.
 *
 * @param {string} key - The session key.
 * @param {number} number - The driver number.
 * @returns {Promise} A promise that resolves to the laps data.
 */
  async getLapsByDriver(key, number) {
    return await axios
      .get(
        this.baseUrl + "laps?session_key=" + key + "&driver_number=" + number
      )
      .then((response) => {
        return response.data;
      });
  }
}
