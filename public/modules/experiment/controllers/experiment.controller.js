(function () {
    'use strict';
    angular
        .module('experiment')
        .controller('Experiment', controller);
    controller.$inject = [
        'experiment.experiment'
    ];
    function controller(
        experiment
    ) {
        var
            vm;
        vm = this;
        console.log('new controller')
        experiment.raw = JSON.stringify(
            experiment,
            function replacer(key, value) {
                if (key === "raw") {
                    return undefined;
                }
                return value;
            }
        );
        vm.allData = '{"data":{"analysis":{"step 1":{},"step 2":{},"step 3":{},"step 4":{}},"biologicalReplicatesGroups":{"Day0-NT":["Day0-NT-1","Day0-NT-2","Day0-NT-3"],"Day1-NT":["Day1-NT-1","Day1-NT-2","Day1-NT-3"],"Day2-NT":["Day2-NT-1","Day2-NT-2"],"Day3-NT":["Day3-NT-1","Day3-NT-2","Day3-NT-3"],"Day4-NT":["Day4-NT-1","Day4-NT-2","Day4-NT-3"],"Day4-T":["Day4-T-1","Day4-T-2","Day4-T-3"],"Day3-T":["Day3-T-1","Day3-T-2","Day3-T-3"],"Day2-T":["Day2-T-1","Day2-T-2"],"Day1-T":["Day1-T-1","Day1-T-2","Day1-T-3"]},"controlProbe":"ACTB","controlSample":"","controlBiologicalReplicatesGroup":"Day0-NT","plates":[{"columns":[1,2,3,4,5,6,7,8,9,10,11,12],"positions":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","B11","B12","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12","H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12"],"rows":["A","B","C","D","E","F","G","H"],"showConfiguration":false,"size":{"columns":12,"rows":8},"A1":{"cycle":"15.26","probe":"ACTB","sample":"Day0-NT-1"},"A2":{"cycle":"15.89","probe":"ACTB","sample":"Day0-NT-1"},"A3":{"cycle":"14.71","probe":"ACTB","sample":"Day0-NT-1"},"A4":{"cycle":"21.15","probe":"OCT","sample":"Day0-NT-1"},"A5":{"cycle":"21.02","probe":"OCT","sample":"Day0-NT-1"},"A6":{"cycle":"22.06","probe":"OCT","sample":"Day0-NT-1"},"A7":{"cycle":"24.15","probe":"NANOG","sample":"Day0-NT-1"},"A8":{"cycle":"24.29","probe":"NANOG","sample":"Day0-NT-1"},"A9":{"cycle":"24.14","probe":"NANOG","sample":"Day0-NT-1"},"A10":{"cycle":"33.25","probe":"BRACHYURY","sample":"Day0-NT-1"},"A11":{"cycle":"34.26","probe":"BRACHYURY","sample":"Day0-NT-1"},"A12":{"cycle":"33.78","probe":"BRACHYURY","sample":"Day0-NT-1"},"B1":{"cycle":"15.5","probe":"ACTB","sample":"Day0-NT-2"},"B2":{"cycle":"16.01","probe":"ACTB","sample":"Day0-NT-2"},"B3":{"cycle":"14.8","probe":"ACTB","sample":"Day0-NT-2"},"B4":{"cycle":"19.27","probe":"OCT","sample":"Day0-NT-2"},"B5":{"cycle":"19.88","probe":"OCT","sample":"Day0-NT-2"},"B6":{"cycle":"18.65","probe":"OCT","sample":"Day0-NT-2"},"B7":{"cycle":"22.94","probe":"NANOG","sample":"Day0-NT-2"},"B8":{"cycle":"23.91","probe":"NANOG","sample":"Day0-NT-2"},"B9":{"cycle":"23.34","probe":"NANOG","sample":"Day0-NT-2"},"B10":{"cycle":"34.91","probe":"BRACHYURY","sample":"Day0-NT-2"},"B11":{"cycle":"36.19","probe":"BRACHYURY","sample":"Day0-NT-2"},"B12":{"cycle":"33.36","probe":"BRACHYURY","sample":"Day0-NT-2"},"C1":{"cycle":"16.34","probe":"ACTB","sample":"Day0-NT-3"},"C2":{"cycle":"16.84","probe":"ACTB","sample":"Day0-NT-3"},"C3":{"cycle":"16.8","probe":"ACTB","sample":"Day0-NT-3"},"C4":{"cycle":"23.1","probe":"OCT","sample":"Day0-NT-3"},"C5":{"cycle":"22.68","probe":"OCT","sample":"Day0-NT-3"},"C6":{"cycle":"22.56","probe":"OCT","sample":"Day0-NT-3"},"C7":{"cycle":"23.76","probe":"NANOG","sample":"Day0-NT-3"},"C8":{"cycle":"22.97","probe":"NANOG","sample":"Day0-NT-3"},"C9":{"cycle":"23.06","probe":"NANOG","sample":"Day0-NT-3"},"C10":{"cycle":"35.98","probe":"BRACHYURY","sample":"Day0-NT-3"},"C11":{"cycle":"36.26","probe":"BRACHYURY","sample":"Day0-NT-3"},"C12":{"cycle":"34.47","probe":"BRACHYURY","sample":"Day0-NT-3"},"D1":{"cycle":"15.11","probe":"ACTB","sample":"Day1-NT-1"},"D2":{"cycle":"15.06","probe":"ACTB","sample":"Day1-NT-1"},"D3":{"cycle":"14.97","probe":"ACTB","sample":"Day1-NT-1"},"D4":{"cycle":"23.24","probe":"OCT","sample":"Day1-NT-1"},"D5":{"cycle":"22.68","probe":"OCT","sample":"Day1-NT-1"},"D6":{"cycle":"22.81","probe":"OCT","sample":"Day1-NT-1"},"D7":{"cycle":"25.53","probe":"NANOG","sample":"Day1-NT-1"},"D8":{"cycle":"26.31","probe":"NANOG","sample":"Day1-NT-1"},"D9":{"cycle":"25.82","probe":"NANOG","sample":"Day1-NT-1"},"D10":{"cycle":"31.15","probe":"BRACHYURY","sample":"Day1-NT-1"},"D11":{"cycle":"29.61","probe":"BRACHYURY","sample":"Day1-NT-1"},"D12":{"cycle":"31.71","probe":"BRACHYURY","sample":"Day1-NT-1"},"E1":{"cycle":"16.15","probe":"ACTB","sample":"Day1-NT-2"},"E2":{"cycle":"16.59","probe":"ACTB","sample":"Day1-NT-2"},"E3":{"cycle":"15.71","probe":"ACTB","sample":"Day1-NT-2"},"E4":{"cycle":"25.35","probe":"OCT","sample":"Day1-NT-2"},"E5":{"cycle":"24.56","probe":"OCT","sample":"Day1-NT-2"},"E6":{"cycle":"24.1","probe":"OCT","sample":"Day1-NT-2"},"E7":{"cycle":"23.26","probe":"NANOG","sample":"Day1-NT-2"},"E8":{"cycle":"24","probe":"NANOG","sample":"Day1-NT-2"},"E9":{"cycle":"23.96","probe":"NANOG","sample":"Day1-NT-2"},"E10":{"cycle":"32.55","probe":"BRACHYURY","sample":"Day1-NT-2"},"E11":{"cycle":"32.01","probe":"BRACHYURY","sample":"Day1-NT-2"},"E12":{"cycle":"33.19","probe":"BRACHYURY","sample":"Day1-NT-2"},"F1":{"cycle":"14.93","probe":"ACTB","sample":"Day1-NT-3"},"F2":{"cycle":"15.53","probe":"ACTB","sample":"Day1-NT-3"},"F3":{"cycle":"15.19","probe":"ACTB","sample":"Day1-NT-3"},"F4":{"cycle":"23.98","probe":"OCT","sample":"Day1-NT-3"},"F5":{"cycle":"23.37","probe":"OCT","sample":"Day1-NT-3"},"F6":{"cycle":"24.73","probe":"OCT","sample":"Day1-NT-3"},"F7":{"cycle":"23.62","probe":"NANOG","sample":"Day1-NT-3"},"F8":{"cycle":"23.14","probe":"NANOG","sample":"Day1-NT-3"},"F9":{"cycle":"24.55","probe":"NANOG","sample":"Day1-NT-3"},"F10":{"cycle":"33.55","probe":"BRACHYURY","sample":"Day1-NT-3"},"F11":{"cycle":"33.68","probe":"BRACHYURY","sample":"Day1-NT-3"},"F12":{"cycle":"34.71","probe":"BRACHYURY","sample":"Day1-NT-3"},"G1":{"cycle":"15.93","probe":"ACTB","sample":"Day1-T-1"},"G2":{"cycle":"16.67","probe":"ACTB","sample":"Day1-T-1"},"G3":{"cycle":"16.47","probe":"ACTB","sample":"Day1-T-1"},"G4":{"cycle":"25.34","probe":"OCT","sample":"Day1-T-1"},"G5":{"cycle":"24.97","probe":"OCT","sample":"Day1-T-1"},"G6":{"cycle":"26.26","probe":"OCT","sample":"Day1-T-1"},"G7":{"cycle":"27.13","probe":"NANOG","sample":"Day1-T-1"},"G8":{"cycle":"27.71","probe":"NANOG","sample":"Day1-T-1"},"G9":{"cycle":"27.32","probe":"NANOG","sample":"Day1-T-1"},"G10":{"cycle":"29.18","probe":"BRACHYURY","sample":"Day1-T-1"},"G11":{"cycle":"28.2","probe":"BRACHYURY","sample":"Day1-T-1"},"G12":{"cycle":"28.39","probe":"BRACHYURY","sample":"Day1-T-1"},"H1":{"cycle":"14.38","probe":"ACTB","sample":"Day1-T-2"},"H2":{"cycle":"14.28","probe":"ACTB","sample":"Day1-T-2"},"H3":{"cycle":"14.08","probe":"ACTB","sample":"Day1-T-2"},"H4":{"cycle":"26.78","probe":"OCT","sample":"Day1-T-2"},"H5":{"cycle":"26.61","probe":"OCT","sample":"Day1-T-2"},"H6":{"cycle":"27.87","probe":"OCT","sample":"Day1-T-2"},"H7":{"cycle":"27.35","probe":"NANOG","sample":"Day1-T-2"},"H8":{"cycle":"28.18","probe":"NANOG","sample":"Day1-T-2"},"H9":{"cycle":"28.47","probe":"NANOG","sample":"Day1-T-2"},"H10":{"cycle":"29.33","probe":"BRACHYURY","sample":"Day1-T-2"},"H11":{"cycle":"29.38","probe":"BRACHYURY","sample":"Day1-T-2"},"H12":{"cycle":"28.28","probe":"BRACHYURY","sample":"Day1-T-2"},"$$hashKey":"object:12"},{"columns":[1,2,3,4,5,6,7,8,9,10,11,12],"positions":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","B11","B12","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12","H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12"],"rows":["A","B","C","D","E","F","G","H"],"showConfiguration":false,"size":{"columns":12,"rows":8},"A1":{"cycle":"15.82","probe":"ACTB","sample":"Day1-T-3"},"A2":{"cycle":"16.05","probe":"ACTB","sample":"Day1-T-3"},"A3":{"cycle":"15.05","probe":"ACTB","sample":"Day1-T-3"},"A4":{"cycle":"24.07","probe":"OCT","sample":"Day1-T-3"},"A5":{"cycle":"24.55","probe":"OCT","sample":"Day1-T-3"},"A6":{"cycle":"23.64","probe":"OCT","sample":"Day1-T-3"},"A7":{"cycle":"26.83","probe":"NANOG","sample":"Day1-T-3"},"A8":{"cycle":"26.2","probe":"NANOG","sample":"Day1-T-3"},"A9":{"cycle":"25.58","probe":"NANOG","sample":"Day1-T-3"},"A10":{"cycle":"29.12","probe":"BRACHYURY","sample":"Day1-T-3"},"A11":{"cycle":"28.73","probe":"BRACHYURY","sample":"Day1-T-3"},"A12":{"cycle":"29.11","probe":"BRACHYURY","sample":"Day1-T-3"},"B1":{"cycle":"15.66","probe":"ACTB","sample":"Day2-NT-1"},"B2":{"cycle":"14.96","probe":"ACTB","sample":"Day2-NT-1"},"B3":{"cycle":"16.11","probe":"ACTB","sample":"Day2-NT-1"},"B4":{"cycle":"24.32","probe":"OCT","sample":"Day2-NT-1"},"B5":{"cycle":"24.23","probe":"OCT","sample":"Day2-NT-1"},"B6":{"cycle":"23.47","probe":"OCT","sample":"Day2-NT-1"},"B7":{"cycle":"26.12","probe":"NANOG","sample":"Day2-NT-1"},"B8":{"cycle":"27.43","probe":"NANOG","sample":"Day2-NT-1"},"B9":{"cycle":"26.09","probe":"NANOG","sample":"Day2-NT-1"},"B10":{"cycle":"30.01","probe":"BRACHYURY","sample":"Day2-NT-1"},"B11":{"cycle":"29.96","probe":"BRACHYURY","sample":"Day2-NT-1"},"B12":{"cycle":"29.06","probe":"BRACHYURY","sample":"Day2-NT-1"},"C1":{"cycle":"17.19","probe":"ACTB","sample":"Day2-NT-2"},"C2":{"cycle":"16.43","probe":"ACTB","sample":"Day2-NT-2"},"C3":{"cycle":"17.95","probe":"ACTB","sample":"Day2-NT-2"},"C4":{"cycle":"24.93","probe":"OCT","sample":"Day2-NT-2"},"C5":{"cycle":"24.08","probe":"OCT","sample":"Day2-NT-2"},"C6":{"cycle":"25.55","probe":"OCT","sample":"Day2-NT-2"},"C7":{"cycle":"27.4","probe":"NANOG","sample":"Day2-NT-2"},"C8":{"cycle":"27.15","probe":"NANOG","sample":"Day2-NT-2"},"C9":{"cycle":"26.29","probe":"NANOG","sample":"Day2-NT-2"},"C10":{"cycle":"31.24","probe":"BRACHYURY","sample":"Day2-NT-2"},"C11":{"cycle":"29.73","probe":"BRACHYURY","sample":"Day2-NT-2"},"C12":{"cycle":"29.85","probe":"BRACHYURY","sample":"Day2-NT-2"},"D1":{"cycle":"15.23","probe":"ACTB","sample":"Day2-T-1"},"D2":{"cycle":"15.34","probe":"ACTB","sample":"Day2-T-1"},"D3":{"cycle":"15.73","probe":"ACTB","sample":"Day2-T-1"},"D4":{"cycle":"27.15","probe":"OCT","sample":"Day2-T-1"},"D5":{"cycle":"27.94","probe":"OCT","sample":"Day2-T-1"},"D6":{"cycle":"26.4","probe":"OCT","sample":"Day2-T-1"},"D7":{"cycle":"29.33","probe":"NANOG","sample":"Day2-T-1"},"D8":{"cycle":"30.12","probe":"NANOG","sample":"Day2-T-1"},"D9":{"cycle":"29.29","probe":"NANOG","sample":"Day2-T-1"},"D10":{"cycle":"28.12","probe":"BRACHYURY","sample":"Day2-T-1"},"D11":{"cycle":"28.22","probe":"BRACHYURY","sample":"Day2-T-1"},"D12":{"cycle":"27.91","probe":"BRACHYURY","sample":"Day2-T-1"},"E1":{"cycle":"15.9","probe":"ACTB","sample":"Day2-T-2"},"E2":{"cycle":"15.53","probe":"ACTB","sample":"Day2-T-2"},"E3":{"cycle":"15.94","probe":"ACTB","sample":"Day2-T-2"},"E4":{"cycle":"28.45","probe":"OCT","sample":"Day2-T-2"},"E5":{"cycle":"28.92","probe":"OCT","sample":"Day2-T-2"},"E6":{"cycle":"29.06","probe":"OCT","sample":"Day2-T-2"},"E7":{"cycle":"27.39","probe":"NANOG","sample":"Day2-T-2"},"E8":{"cycle":"28.02","probe":"NANOG","sample":"Day2-T-2"},"E9":{"cycle":"27.91","probe":"NANOG","sample":"Day2-T-2"},"E10":{"cycle":"28.43","probe":"BRACHYURY","sample":"Day2-T-2"},"E11":{"cycle":"29.69","probe":"BRACHYURY","sample":"Day2-T-2"},"E12":{"cycle":"29.81","probe":"BRACHYURY","sample":"Day2-T-2"},"F1":{"cycle":"","probe":"","sample":""},"F2":{"cycle":"","probe":"","sample":""},"F3":{"cycle":"","probe":"","sample":""},"F4":{"cycle":"","probe":"","sample":""},"F5":{"cycle":"","probe":"","sample":""},"F6":{"cycle":"","probe":"","sample":""},"F7":{"cycle":"","probe":"","sample":""},"F8":{"cycle":"","probe":"","sample":""},"F9":{"cycle":"","probe":"","sample":""},"F10":{"cycle":"","probe":"","sample":""},"F11":{"cycle":"","probe":"","sample":""},"F12":{"cycle":"","probe":"","sample":""},"G1":{"cycle":"","probe":"","sample":""},"G2":{"cycle":"","probe":"","sample":""},"G3":{"cycle":"","probe":"","sample":""},"G4":{"cycle":"","probe":"","sample":""},"G5":{"cycle":"","probe":"","sample":""},"G6":{"cycle":"","probe":"","sample":""},"G7":{"cycle":"","probe":"","sample":""},"G8":{"cycle":"","probe":"","sample":""},"G9":{"cycle":"","probe":"","sample":""},"G10":{"cycle":"","probe":"","sample":""},"G11":{"cycle":"","probe":"","sample":""},"G12":{"cycle":"","probe":"","sample":""},"H1":{"cycle":"","probe":"","sample":""},"H2":{"cycle":"","probe":"","sample":""},"H3":{"cycle":"","probe":"","sample":""},"H4":{"cycle":"","probe":"","sample":""},"H5":{"cycle":"","probe":"","sample":""},"H6":{"cycle":"","probe":"","sample":""},"H7":{"cycle":"","probe":"","sample":""},"H8":{"cycle":"","probe":"","sample":""},"H9":{"cycle":"","probe":"","sample":""},"H10":{"cycle":"","probe":"","sample":""},"H11":{"cycle":"","probe":"","sample":""},"H12":{"cycle":"","probe":"","sample":""},"$$hashKey":"object:301"},{"columns":[1,2,3,4,5,6,7,8,9,10,11,12],"positions":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","B11","B12","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12","H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12"],"rows":["A","B","C","D","E","F","G","H"],"showConfiguration":false,"size":{"columns":12,"rows":8},"A1":{"cycle":"14.99","probe":"ACTB","sample":"Day0-NT-1"},"A2":{"cycle":"14.59","probe":"ACTB","sample":"Day0-NT-1"},"A3":{"cycle":"15.62","probe":"ACTB","sample":"Day0-NT-1"},"A4":{"cycle":"35.14","probe":"NKX","sample":"Day0-NT-1"},"A5":{"cycle":"36.35","probe":"NKX","sample":"Day0-NT-1"},"A6":{"cycle":"","probe":"NKX","sample":"Day0-NT-1"},"A7":{"cycle":"37.18","probe":"FOXA2","sample":"Day0-NT-1"},"A8":{"cycle":"38.48","probe":"FOXA2","sample":"Day0-NT-1"},"A9":{"cycle":"36.29","probe":"FOXA2","sample":"Day0-NT-1"},"A10":{"cycle":"","probe":"GLOBIN","sample":"Day0-NT-1"},"A11":{"cycle":"","probe":"GLOBIN","sample":"Day0-NT-1"},"A12":{"cycle":"","probe":"GLOBIN","sample":"Day0-NT-1"},"B1":{"cycle":"15.99","probe":"ACTB","sample":"Day3-NT-1"},"B2":{"cycle":"16.52","probe":"ACTB","sample":"Day3-NT-1"},"B3":{"cycle":"15.44","probe":"ACTB","sample":"Day3-NT-1"},"B4":{"cycle":"33.17","probe":"NKX","sample":"Day3-NT-1"},"B5":{"cycle":"34.8","probe":"NKX","sample":"Day3-NT-1"},"B6":{"cycle":"34.23","probe":"NKX","sample":"Day3-NT-1"},"B7":{"cycle":"31.44","probe":"FOXA2","sample":"Day3-NT-1"},"B8":{"cycle":"32.32","probe":"FOXA2","sample":"Day3-NT-1"},"B9":{"cycle":"32.93","probe":"FOXA2","sample":"Day3-NT-1"},"B10":{"cycle":"35.98","probe":"GLOBIN","sample":"Day3-NT-1"},"B11":{"cycle":"36.93","probe":"GLOBIN","sample":"Day3-NT-1"},"B12":{"cycle":"35.89","probe":"GLOBIN","sample":"Day3-NT-1"},"C1":{"cycle":"16.53","probe":"ACTB","sample":"Day3-NT-2"},"C2":{"cycle":"16.52","probe":"ACTB","sample":"Day3-NT-2"},"C3":{"cycle":"16.63","probe":"ACTB","sample":"Day3-NT-2"},"C4":{"cycle":"30.91","probe":"NKX","sample":"Day3-NT-2"},"C5":{"cycle":"30.47","probe":"NKX","sample":"Day3-NT-2"},"C6":{"cycle":"31.89","probe":"NKX","sample":"Day3-NT-2"},"C7":{"cycle":"31.82","probe":"FOXA2","sample":"Day3-NT-2"},"C8":{"cycle":"31.4","probe":"FOXA2","sample":"Day3-NT-2"},"C9":{"cycle":"32.69","probe":"FOXA2","sample":"Day3-NT-2"},"C10":{"cycle":"39.07","probe":"GLOBIN","sample":"Day3-NT-2"},"C11":{"cycle":"38","probe":"GLOBIN","sample":"Day3-NT-2"},"C12":{"cycle":"39.54","probe":"GLOBIN","sample":"Day3-NT-2"},"D1":{"cycle":"15.65","probe":"ACTB","sample":"Day3-NT-3"},"D2":{"cycle":"15.59","probe":"ACTB","sample":"Day3-NT-3"},"D3":{"cycle":"15.99","probe":"ACTB","sample":"Day3-NT-3"},"D4":{"cycle":"32.47","probe":"NKX","sample":"Day3-NT-3"},"D5":{"cycle":"32.93","probe":"NKX","sample":"Day3-NT-3"},"D6":{"cycle":"32.88","probe":"NKX","sample":"Day3-NT-3"},"D7":{"cycle":"32.29","probe":"FOXA2","sample":"Day3-NT-3"},"D8":{"cycle":"33.47","probe":"FOXA2","sample":"Day3-NT-3"},"D9":{"cycle":"33.65","probe":"FOXA2","sample":"Day3-NT-3"},"D10":{"cycle":"38.93","probe":"GLOBIN","sample":"Day3-NT-3"},"D11":{"cycle":"38.15","probe":"GLOBIN","sample":"Day3-NT-3"},"D12":{"cycle":"40.29","probe":"GLOBIN","sample":"Day3-NT-3"},"E1":{"cycle":"15.75","probe":"ACTB","sample":"Day3-T-1"},"E2":{"cycle":"15.55","probe":"ACTB","sample":"Day3-T-1"},"E3":{"cycle":"15.44","probe":"ACTB","sample":"Day3-T-1"},"E4":{"cycle":"29.15","probe":"NKX","sample":"Day3-T-1"},"E5":{"cycle":"30.36","probe":"NKX","sample":"Day3-T-1"},"E6":{"cycle":"28.26","probe":"NKX","sample":"Day3-T-1"},"E7":{"cycle":"28.12","probe":"FOXA2","sample":"Day3-T-1"},"E8":{"cycle":"29.48","probe":"FOXA2","sample":"Day3-T-1"},"E9":{"cycle":"28.08","probe":"FOXA2","sample":"Day3-T-1"},"E10":{"cycle":"30.45","probe":"GLOBIN","sample":"Day3-T-1"},"E11":{"cycle":"31.1","probe":"GLOBIN","sample":"Day3-T-1"},"E12":{"cycle":"30.05","probe":"GLOBIN","sample":"Day3-T-1"},"F1":{"cycle":"16.93","probe":"ACTB","sample":"Day3-T-2"},"F2":{"cycle":"16.17","probe":"ACTB","sample":"Day3-T-2"},"F3":{"cycle":"17.1","probe":"ACTB","sample":"Day3-T-2"},"F4":{"cycle":"26.53","probe":"NKX","sample":"Day3-T-2"},"F5":{"cycle":"26.18","probe":"NKX","sample":"Day3-T-2"},"F6":{"cycle":"27.48","probe":"NKX","sample":"Day3-T-2"},"F7":{"cycle":"28.79","probe":"FOXA2","sample":"Day3-T-2"},"F8":{"cycle":"29.64","probe":"FOXA2","sample":"Day3-T-2"},"F9":{"cycle":"27.51","probe":"FOXA2","sample":"Day3-T-2"},"F10":{"cycle":"32","probe":"GLOBIN","sample":"Day3-T-2"},"F11":{"cycle":"33.54","probe":"GLOBIN","sample":"Day3-T-2"},"F12":{"cycle":"32.23","probe":"GLOBIN","sample":"Day3-T-2"},"G1":{"cycle":"17.31","probe":"ACTB","sample":"Day3-T-3"},"G2":{"cycle":"18","probe":"ACTB","sample":"Day3-T-3"},"G3":{"cycle":"17.99","probe":"ACTB","sample":"Day3-T-3"},"G4":{"cycle":"30.2","probe":"NKX","sample":"Day3-T-3"},"G5":{"cycle":"30.06","probe":"NKX","sample":"Day3-T-3"},"G6":{"cycle":"31.45","probe":"NKX","sample":"Day3-T-3"},"G7":{"cycle":"25.67","probe":"FOXA2","sample":"Day3-T-3"},"G8":{"cycle":"26.55","probe":"FOXA2","sample":"Day3-T-3"},"G9":{"cycle":"26.19","probe":"FOXA2","sample":"Day3-T-3"},"G10":{"cycle":"28.62","probe":"GLOBIN","sample":"Day3-T-3"},"G11":{"cycle":"29.62","probe":"GLOBIN","sample":"Day3-T-3"},"G12":{"cycle":"27.98","probe":"GLOBIN","sample":"Day3-T-3"},"H1":{"cycle":"","probe":"","sample":""},"H2":{"cycle":"","probe":"","sample":""},"H3":{"cycle":"","probe":"","sample":""},"H4":{"cycle":"","probe":"","sample":""},"H5":{"cycle":"","probe":"","sample":""},"H6":{"cycle":"","probe":"","sample":""},"H7":{"cycle":"","probe":"","sample":""},"H8":{"cycle":"","probe":"","sample":""},"H9":{"cycle":"","probe":"","sample":""},"H10":{"cycle":"","probe":"","sample":""},"H11":{"cycle":"","probe":"","sample":""},"H12":{"cycle":"","probe":"","sample":""},"$$hashKey":"object:577"},{"columns":[1,2,3,4,5,6,7,8,9,10,11,12],"positions":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","B11","B12","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12","H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12"],"rows":["A","B","C","D","E","F","G","H"],"showConfiguration":false,"size":{"columns":12,"rows":8},"A1":{"cycle":"16.14","probe":"ACTB","sample":"Day4-NT-1"},"A2":{"cycle":"15.82","probe":"ACTB","sample":"Day4-NT-1"},"A3":{"cycle":"16.01","probe":"ACTB","sample":"Day4-NT-1"},"A4":{"cycle":"32.5","probe":"NKX","sample":"Day4-NT-1"},"A5":{"cycle":"31.85","probe":"NKX","sample":"Day4-NT-1"},"A6":{"cycle":"31.43","probe":"NKX","sample":"Day4-NT-1"},"A7":{"cycle":"30.5","probe":"FOXA2","sample":"Day4-NT-1"},"A8":{"cycle":"31.61","probe":"FOXA2","sample":"Day4-NT-1"},"A9":{"cycle":"31.58","probe":"FOXA2","sample":"Day4-NT-1"},"A10":{"cycle":"34.23","probe":"GLOBIN","sample":"Day4-NT-1"},"A11":{"cycle":"33.77","probe":"GLOBIN","sample":"Day4-NT-1"},"A12":{"cycle":"32.69","probe":"GLOBIN","sample":"Day4-NT-1"},"B1":{"cycle":"15.37","probe":"ACTB","sample":"Day4-NT-2"},"B2":{"cycle":"14.75","probe":"ACTB","sample":"Day4-NT-2"},"B3":{"cycle":"15.37","probe":"ACTB","sample":"Day4-NT-2"},"B4":{"cycle":"30.81","probe":"NKX","sample":"Day4-NT-2"},"B5":{"cycle":"29.44","probe":"NKX","sample":"Day4-NT-2"},"B6":{"cycle":"31.86","probe":"NKX","sample":"Day4-NT-2"},"B7":{"cycle":"28.03","probe":"FOXA2","sample":"Day4-NT-2"},"B8":{"cycle":"27.13","probe":"FOXA2","sample":"Day4-NT-2"},"B9":{"cycle":"29.21","probe":"FOXA2","sample":"Day4-NT-2"},"B10":{"cycle":"37.04","probe":"GLOBIN","sample":"Day4-NT-2"},"B11":{"cycle":"37.65","probe":"GLOBIN","sample":"Day4-NT-2"},"B12":{"cycle":"35.22","probe":"GLOBIN","sample":"Day4-NT-2"},"C1":{"cycle":"16.79","probe":"ACTB","sample":"Day4-NT-3"},"C2":{"cycle":"16.54","probe":"ACTB","sample":"Day4-NT-3"},"C3":{"cycle":"16.71","probe":"ACTB","sample":"Day4-NT-3"},"C4":{"cycle":"33.44","probe":"NKX","sample":"Day4-NT-3"},"C5":{"cycle":"34.85","probe":"NKX","sample":"Day4-NT-3"},"C6":{"cycle":"33.59","probe":"NKX","sample":"Day4-NT-3"},"C7":{"cycle":"32.79","probe":"FOXA2","sample":"Day4-NT-3"},"C8":{"cycle":"33.49","probe":"FOXA2","sample":"Day4-NT-3"},"C9":{"cycle":"32.8","probe":"FOXA2","sample":"Day4-NT-3"},"C10":{"cycle":"37.41","probe":"GLOBIN","sample":"Day4-NT-3"},"C11":{"cycle":"36.29","probe":"GLOBIN","sample":"Day4-NT-3"},"C12":{"cycle":"37.41","probe":"GLOBIN","sample":"Day4-NT-3"},"D1":{"cycle":"15.63","probe":"ACTB","sample":"Day4-T-1"},"D2":{"cycle":"15.75","probe":"ACTB","sample":"Day4-T-1"},"D3":{"cycle":"15.43","probe":"ACTB","sample":"Day4-T-1"},"D4":{"cycle":"27.12","probe":"NKX","sample":"Day4-T-1"},"D5":{"cycle":"26.48","probe":"NKX","sample":"Day4-T-1"},"D6":{"cycle":"27.58","probe":"NKX","sample":"Day4-T-1"},"D7":{"cycle":"26.31","probe":"FOXA2","sample":"Day4-T-1"},"D8":{"cycle":"26.55","probe":"FOXA2","sample":"Day4-T-1"},"D9":{"cycle":"26.84","probe":"FOXA2","sample":"Day4-T-1"},"D10":{"cycle":"28.44","probe":"GLOBIN","sample":"Day4-T-1"},"D11":{"cycle":"28.91","probe":"GLOBIN","sample":"Day4-T-1"},"D12":{"cycle":"28.58","probe":"GLOBIN","sample":"Day4-T-1"},"E1":{"cycle":"14.4","probe":"ACTB","sample":"Day4-T-2"},"E2":{"cycle":"13.98","probe":"ACTB","sample":"Day4-T-2"},"E3":{"cycle":"13.86","probe":"ACTB","sample":"Day4-T-2"},"E4":{"cycle":"29.37","probe":"NKX","sample":"Day4-T-2"},"E5":{"cycle":"27.92","probe":"NKX","sample":"Day4-T-2"},"E6":{"cycle":"30.46","probe":"NKX","sample":"Day4-T-2"},"E7":{"cycle":"23.73","probe":"FOXA2","sample":"Day4-T-2"},"E8":{"cycle":"24.7","probe":"FOXA2","sample":"Day4-T-2"},"E9":{"cycle":"24.88","probe":"FOXA2","sample":"Day4-T-2"},"E10":{"cycle":"30.91","probe":"GLOBIN","sample":"Day4-T-2"},"E11":{"cycle":"30.64","probe":"GLOBIN","sample":"Day4-T-2"},"E12":{"cycle":"31.7","probe":"GLOBIN","sample":"Day4-T-2"},"F1":{"cycle":"16.54","probe":"ACTB","sample":"Day4-T-3"},"F2":{"cycle":"16.75","probe":"ACTB","sample":"Day4-T-3"},"F3":{"cycle":"16.21","probe":"ACTB","sample":"Day4-T-3"},"F4":{"cycle":"27.23","probe":"NKX","sample":"Day4-T-3"},"F5":{"cycle":"26.66","probe":"NKX","sample":"Day4-T-3"},"F6":{"cycle":"26.26","probe":"NKX","sample":"Day4-T-3"},"F7":{"cycle":"27.2","probe":"FOXA2","sample":"Day4-T-3"},"F8":{"cycle":"27.94","probe":"FOXA2","sample":"Day4-T-3"},"F9":{"cycle":"26.24","probe":"FOXA2","sample":"Day4-T-3"},"F10":{"cycle":"26.19","probe":"GLOBIN","sample":"Day4-T-3"},"F11":{"cycle":"26.91","probe":"GLOBIN","sample":"Day4-T-3"},"F12":{"cycle":"25.92","probe":"GLOBIN","sample":"Day4-T-3"},"G1":{"cycle":"","probe":"","sample":""},"G2":{"cycle":"","probe":"","sample":""},"G3":{"cycle":"","probe":"","sample":""},"G4":{"cycle":"","probe":"","sample":""},"G5":{"cycle":"","probe":"","sample":""},"G6":{"cycle":"","probe":"","sample":""},"G7":{"cycle":"","probe":"","sample":""},"G8":{"cycle":"","probe":"","sample":""},"G9":{"cycle":"","probe":"","sample":""},"G10":{"cycle":"","probe":"","sample":""},"G11":{"cycle":"","probe":"","sample":""},"G12":{"cycle":"","probe":"","sample":""},"H1":{"cycle":"","probe":"","sample":""},"H2":{"cycle":"","probe":"","sample":""},"H3":{"cycle":"","probe":"","sample":""},"H4":{"cycle":"","probe":"","sample":""},"H5":{"cycle":"","probe":"","sample":""},"H6":{"cycle":"","probe":"","sample":""},"H7":{"cycle":"","probe":"","sample":""},"H8":{"cycle":"","probe":"","sample":""},"H9":{"cycle":"","probe":"","sample":""},"H10":{"cycle":"","probe":"","sample":""},"H11":{"cycle":"","probe":"","sample":""},"H12":{"cycle":"","probe":"","sample":""},"$$hashKey":"object:884"}],"probes":["ACTB","OCT","NANOG","BRACHYURY","NKX","FOXA2","GLOBIN"],"samples":["Day0-NT-1","Day0-NT-2","Day0-NT-3","Day1-NT-1","Day1-NT-2","Day1-NT-3","Day1-T-1","Day1-T-2","Day1-T-3","Day2-NT-1","Day2-NT-2","Day2-T-1","Day2-T-2","Day3-NT-1","Day3-NT-2","Day3-NT-3","Day3-T-1","Day3-T-2","Day3-T-3","Day4-NT-1","Day4-NT-2","Day4-NT-3","Day4-T-1","Day4-T-2","Day4-T-3"]},"metadata":{"analysis":{"step 1":{"done":false,"show":false},"step 2":{"done":false,"show":false},"step 3":{"done":false},"step 4":{"done":false}},"biologicalReplicatesGroups":{"colours":{"Day0-NT":"#90bf72","Day1-NT":"#728fbf","Day2-NT":"#72bfb6","Day3-NT":"#a7bf72","Day4-NT":"#72bf94","Day4-T":"#bfa372","Day3-T":"#7872bf","Day2-T":"#9a72bf","Day1-T":"#bf7472"},"samples":{"Day0-NT-1":{"selected":true,"used":true},"Day0-NT-2":{"selected":true,"used":true},"Day0-NT-3":{"selected":true,"used":true},"Day1-NT-1":{"selected":true,"used":true},"Day1-NT-2":{"selected":true,"used":true},"Day1-NT-3":{"selected":true,"used":true},"Day1-T-1":{"selected":true,"used":true},"Day1-T-2":{"selected":true,"used":true},"Day1-T-3":{"selected":true,"used":true},"Day2-NT-1":{"selected":true,"used":true},"Day2-NT-2":{"selected":true,"used":true},"Day2-T-1":{"selected":true,"used":true},"Day2-T-2":{"selected":true,"used":true},"Day3-NT-1":{"selected":true,"used":true},"Day3-NT-2":{"selected":true,"used":true},"Day3-NT-3":{"selected":true,"used":true},"Day3-T-1":{"selected":true,"used":true},"Day3-T-2":{"selected":true,"used":true},"Day3-T-3":{"selected":true,"used":true},"Day4-NT-1":{"selected":true,"used":true},"Day4-NT-2":{"selected":true,"used":true},"Day4-NT-3":{"selected":true,"used":true},"Day4-T-1":{"selected":true,"used":true},"Day4-T-2":{"selected":true,"used":true},"Day4-T-3":{"selected":true,"used":true}}},"helpers":{},"missing":{},"probes":{"colours":["#7372bf","#bf9072","#9abf72","#72bf96","#7291bf","#77bf72","#84bf72"],"controlVariablePropertyName":"controlProbe"},"samples":{"colours":["#7285bf","#b9bf72","#72b4bf","#9bbf72","#bf729f","#bf9772","#bfb572","#bf7272","#7572bf","#bf7285","#89bf72","#73bf72","#a272bf","#72bfa0","#72bbbf","#8172bf","#a272bf","#bf8072","#72bf98","#bfbc72","#bf9472","#bf7e72","#9abf72","#72adbf","#7278bf"],"controlVariablePropertyName":"controlSample"},"missingDone":false},"test":42}';
        vm.load = function load() {
            var reload = JSON.parse(vm.allData);
            reload.metadata.biologicalReplicatesGroups.add = experiment.metadata.biologicalReplicatesGroups.add;
            reload.metadata.biologicalReplicatesGroups.remove = experiment.metadata.biologicalReplicatesGroups.remove;
            reload.metadata.helpers.coerceModel = experiment.metadata.helpers.coerceModel;
            reload.metadata.probes.add = experiment.metadata.probes.add;
            reload.metadata.probes.change = experiment.metadata.probes.change;
            reload.metadata.probes.remove = experiment.metadata.probes.remove;
            reload.metadata.samples.add = experiment.metadata.samples.add;
            reload.metadata.samples.change = experiment.metadata.samples.change;
            reload.metadata.samples.remove = experiment.metadata.samples.remove;
            reload.metadata.biologicalReplicatesGroups.add = experiment.metadata.biologicalReplicatesGroups.add;
            reload.metadata.biologicalReplicatesGroups.change = experiment.metadata.biologicalReplicatesGroups.change;
            reload.metadata.biologicalReplicatesGroups.remove = experiment.metadata.biologicalReplicatesGroups.remove;
            experiment.data = reload.data;
            experiment.metadata = reload.metadata;
        }
        vm.gen = function gen() {
            vm.allData = experiment.raw;
        }
    }
}());
