const exampleChart = () => {
    // Fetch data from API count movie by special features
    fetch("http://localhost:3000/count-by-special-features")
      .then((response) => response.json())
      .then((data) => {
        let chartData = {
          features: data[0].map((x) => x.feature),
          values: data[0].map((x) => x.movie_count),
        };

        const chartOptions = {
          chart: {
            type: "bar",
            height: "100%",
          },
          series: [
            {
              name: "Movie Count",
              data: chartData.values,
            },
          ],
          title: {
            text: "Movie Count by Special Features", // Update with desired title
            align: "center",
            style: {
              fontSize: "18px",
              fontWeight: "bold",
            },
          },
          xaxis: {
            categories: chartData.features,
            labels: {
              show: true,
            },
          },
        };
    
        const chart = new ApexCharts(
          document.querySelector("#chart-container"),
          chartOptions
        );
        chart.render();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
}

const topTenCustomerChart = () => {
  // Fetch data from API top ten customer
    fetch("http://localhost:3000/top-ten-customer-rental")
        .then((response) => response.json())
        .then((data) => {
            let chartData = {
              totalRentals: data[0].map((total) => total.total_rental),
              customerName: data[0].map(
                (name) =>
                  `${name.customer_first_name} ${name.customer_last_name}`
              ),
            };

            const chartOptions = {
              chart: {
                type: "bar",
                height: "100%",
              },
              series: [
                {
                  name: "Total Rental",
                  data: chartData.totalRentals,
                },
              ],
              title: {
                text: "Top 10 Most Rental Customers", // Update with desired title
                align: "center",
                style: {
                  fontSize: "18px",
                  fontWeight: "bold",
                },
              },
              xaxis: {
                categories: chartData.customerName,
                labels: {
                  show: true,
                },
              },
            };

            const chart = new ApexCharts(
                document.querySelector("#top-ten-customer-chart"),
                chartOptions
            );
            chart.render();
            })
            .catch((error) => {
            console.log("Error:", error);
            });
};

const countByCategoryChart = () => {
  // Fetch data from API count movie by categories
  fetch("http://localhost:3000/count-by-category")
    .then((response) => response.json())
    .then((data) => {
      let chartData = {
        totals: data[0].map((total) => total.total),
        categories: data[0].map((category) => category.category),
      };

      const chartOptions = {
        chart: {
          type: "pie",
          height: "100%",
        },
        series: chartData.totals,
        labels: chartData.categories,
        dataLables: {
            enabled: true,
        },
        title: {
          text: "Movie Count by Categories", // Update with desired title
          align: "center",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
          },
        },
      };

      const chart = new ApexCharts(
        document.querySelector("#movie-count-by-category"),
        chartOptions
      );
      chart.render();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

const countByActorChart = () => {
  // Fetch data from API top ten customer
  fetch("http://localhost:3000/count-by-actor")
    .then((response) => response.json())
    .then((data) => {
      let chartData = {
        totalActors: data[0].map((total) => total.total_actors),
        filmTitle: data[0].map((title) => title.film_title),
      };

      const chartOptions = {
        chart: {
          type: "bar",
          height: "100%",
        },
        series: [
          {
            name: "Total Actors",
            data: chartData.totalActors,
          },
        ],
        title: {
          text: "Top 25 Most Movie by Actors", // Update with desired title
          align: "center",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
          },
        },
        xaxis: {
          categories: chartData.filmTitle,
          labels: {
            show: true,
          },
        },
      };

      const chart = new ApexCharts(
        document.querySelector("#movie-count-by-actor"),
        chartOptions
      );
      chart.render();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

const customerByAmountChart = () => {
  // Fetch data from API top ten customer
  fetch("http://localhost:3000/customer-by-amount")
    .then((response) => response.json())
    .then((data) => {
      let chartData = {
        totalAmount: data[0].map((total) => total.total_payment_amount),
        customerName: data[0].map((name) => name.customer_name),
      };

      const chartOptions = {
        chart: {
          type: "bar",
          height: "100%",
        },
        series: [
          {
            name: "Total Amount",
            data: chartData.totalAmount,
          },
        ],
        title: {
          text: "Top 10 Most Customer by Amount", // Update with desired title
          align: "center",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
          },
        },
        xaxis: {
          categories: chartData.customerName,
          labels: {
            show: true,
          },
        },
      };

      const chart = new ApexCharts(
        document.querySelector("#customer-by-amount"),
        chartOptions
      );
      chart.render();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

const countByLanguageChart = () => {
  // Fetch data from API count movie by categories
  fetch("http://localhost:3000/count-by-language")
    .then((response) => response.json())
    .then((data) => {
      let chartData = {
        totalFilm: data[0].map((total) => total.total_film),
        languages: data[0].map((language) => language.language),
      };

      const chartOptions = {
        chart: {
          type: "pie",
          height: "100%",
        },
        series: chartData.totalFilm,
        labels: chartData.languages,
        dataLables: {
          enabled: true,
        },
        title: {
          text: "Movie Count by Language", // Update with desired title
          align: "center",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
          },
        },
      };

      const chart = new ApexCharts(
        document.querySelector("#movie-count-by-language"),
        chartOptions
      );
      chart.render();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

window.addEventListener('load', () => {
    exampleChart();
    topTenCustomerChart();
    countByCategoryChart();
    countByActorChart();
    customerByAmountChart();
    countByLanguageChart();
});
