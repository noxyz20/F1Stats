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
   * Retrieves a session by meeting key.
   *
   * @param {string} meeting_key - The meeting key to search for.
   * @returns {Promise} A promise that resolves with the session data.
   */
  async getSessionByMeetingKey(meeting_key) {
    return await axios.get(
      this.baseUrl + "sessions?meeting_key=" + meeting_key
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
  /**
   * Retrieves the latest driver position based on the provided session key.
   * @param {string} key - The session key used to retrieve the driver position.
   * @param {number|null} top - The number of data to return starting from index 0. If null, returns all data. Default is null.
   * @returns {Promise<Object[]>} - A promise that resolves to an array of latest driver position objects.
   */
  async getLatestDriverPosition(key, top = null) {
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

        let sortedData = Object.values(latestData).sort((a, b) => {
          return a.position - b.position;
        });

        if (top !== null) {
          return sortedData.slice(0, top);
        } else {
          return sortedData;
        }
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
   * @param {string} session_key - The session session_.
   * @param {number} number - The driver number.
   * @returns {Promise<Object>} A promise that resolves to the driver page data.
   */
  async getDriverPage(session_key, number) {
    return await axios
      .get(
        this.baseUrl +
          "drivers?session_key=" +
          session_key +
          "&driver_number=" +
          number
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
   * @param {string} session_key - The session key.
   * @param {number} number - The driver number.
   * @returns {Promise} A promise that resolves to the laps data.
   */
  async getLapsByDriver(session_key, number) {
    return await axios
      .get(
        this.baseUrl +
          "laps?session_key=" +
          session_key +
          "&driver_number=" +
          number
      )
      .then((response) => {
        return response.data;
      });
  }

  /**
   * Retrieves the seasons from the API.
   * @returns {Promise<number[]>} A promise that resolves to an array of unique years representing the seasons.
   */
  async getSeasons() {
    return await axios.get(this.baseUrl + "meetings").then((response) => {
      return response.data
        .map((item) => {
          return new Date(item.date_start).getFullYear();
        })
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
    });
  }

  /**
   * Retrieves the fastest lap from the API based on the session key.
   *
   * @param {string} session_key - The session key used to identify the laps.
   * @returns {Promise<Object>} A promise that resolves to the fastest lap object.
   */
  async getFastestLap(session_key) {
    return await axios
      .get(this.baseUrl + "laps?session_key=" + session_key)
      .then((response) => {
        let laps = response.data.filter((lap) => lap.lap_duration !== null);

        return laps.reduce((prev, current) => {
          return prev.lap_duration < current.lap_duration ? prev : current;
        });
      });
  }
}
