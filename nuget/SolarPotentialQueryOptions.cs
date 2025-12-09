using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SolarPotential
{
    /// <summary>
    /// Query options for the Solar Potential API
    /// </summary>
    public class SolarPotentialQueryOptions
    {
        /// <summary>
        /// The latitude of the location to get the estimated annual energy production of a PV system for
        /// Example: 37.7749
        /// </summary>
        [JsonProperty("lat")]
        public string Lat { get; set; }

        /// <summary>
        /// The longitude of the location to get the estimated annual energy production of a PV system for
        /// Example: -122.4194
        /// </summary>
        [JsonProperty("lon")]
        public string Lon { get; set; }
    }
}
