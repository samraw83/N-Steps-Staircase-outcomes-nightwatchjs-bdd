
const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chai = require('chai')

require('nightwatch-Cucumber')({
  cucumberArgs: ['--require', 'timeout.js', '--require', 'features/step_definitions', '--format', 'pretty', '--format', 'json',
    '--require', 'features/step_definitions', 'features']
})

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: true,
  disable_colors:false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path:"",
    host:'127.0.0.1',
    port:5555
    },

  test_settings: {
    end_session_on_fail: false,
    skip_test_cases_on_fail: false,

    default: {
        launch_url: 'http://localhost:8080/',  
        selenium_host:'127.0.0.1',
        selenium_port:5555,
        end_session_on_fail: false,
        skip_test_cases_on_fail: false,
        screenshots:{
            enabled: true,
            on_failure: true,
            on_error: true,
            path: "reports/screenshots"
        },
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled: true,
        'phantomjs.binary.path':phantomjs.path
      }
    },
    chrome: {
        screenshots:{
            enabled: true,
            on_failure: true,
            on_error: true,
            path: "reports/screenshots"
    },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
    },
        selenium:{
            cli_args:{
                'webdriver.chrome.driver': chromedriver.path
            }
        }
    },
    firefox: {
        screenshots:{
            enabled: true,
            on_failure: true,
            on_error: true,
            path: "reports/screenshots"
    },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
    },
        selenium:{
            cli_args:{
                'webdriver.gecko.driver': geckodriver.path
            }
        }
    }
  }
}
