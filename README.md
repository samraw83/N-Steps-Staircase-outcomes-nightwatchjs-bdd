
# Problem Statement: 
1. A Staircase has N number of steps.
2. User can either take 1 or 2 steps at a time.
3. Find the number of possible outputs user can climb the stairs if number of steps are provided.

# suppose for 3 steps user can take steps as [1,1,1], [1,2] & [2,1].

# Framework Description:
    --- Nightwatchjs node module is used for testing.
    --- Nightwatch-cucumber & Cucumber node modules are used for creating a BDD framework.
    --- chai assertion is used for asseting the result.
    

# Issue in execution:
getting below error on execution, with command <npm start> or <npm start test>, 
<!-- verbose cli [ 'C:\\Program Files\\nodejs\\node.exe',
1 verbose cli   'C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js',
1 verbose cli   'start' ]
2 info using npm@5.6.0
3 info using node@v8.11.2
4 verbose run-script [ 'prestart', 'start', 'poststart' ]
5 info lifecycle sandeep_bdd@1.0.0~prestart: sandeep_bdd@1.0.0
6 info lifecycle sandeep_bdd@1.0.0~start: sandeep_bdd@1.0.0
7 verbose lifecycle sandeep_bdd@1.0.0~start: unsafe-perm in lifecycle true
8 verbose lifecycle sandeep_bdd@1.0.0~start: PATH: C:\Program Files\nodejs\node_modules\npm\node_modules\npm-lifecycle\node-gyp-bin;C:\Sandeep_BDD\node_modules\.bin;C:\Program Files (x86)\Common Files\Oracle\Java\javapath;C:\ProgramData\Oracle\Java\javapath;C:\windows\system32;C:\windows;C:\windows\System32\Wbem;C:\windows\System32\WindowsPowerShell\v1.0\;C:\Maven\apache-maven-3.3.9\bin;C:\Program Files\MATLAB\R2017b\bin;C:\Program Files\MATLAB\R2017a\bin;C:\Users\ssi146\workspace2\AutoIt\lib;C:\windows\System32\WindowsPowerShell\v1.0\;C:\windows\System32\WindowsPowerShell\v1.0\;%JAVA_HOME%\bin;%M2_HOME%\bin;C:\Program Files\nodejs\;C:\tech.review\node_modules\.bin\chromedriver;C:\Program Files\Intel\WiFi\bin\;C:\Program Files\Common Files\Intel\WirelessCommon\;C:\android-sdk-windows\tools;C:\android-sdk-windows\platform-tools;C:\Users\ssi146\AppData\Roaming\npm;C:\Program Files\Microsoft VS Code\bin;C:\Users\ssi146\AppData\Local\atom\bin;C:\Program Files\Intel\WiFi\bin\;C:\Program Files\Common Files\Intel\WirelessCommon\
9 verbose lifecycle sandeep_bdd@1.0.0~start: CWD: C:\Sandeep_BDD
10 silly lifecycle sandeep_bdd@1.0.0~start: Args: [ '/d /s /c', 'test' ]
11 silly lifecycle sandeep_bdd@1.0.0~start: Returned: code: 1  signal: null
12 info lifecycle sandeep_bdd@1.0.0~start: Failed to exec start script
13 verbose stack Error: sandeep_bdd@1.0.0 start: `test`
13 verbose stack Exit status 1 -->

Investigating the issue and trying to resolve it.

C:\Program Files\nodejs\node_modules\npm\node_modules\npm-lifecycle\index.js

one of the explanantion for the error is given in the link:                         https://github.com/facebook/create-react-app/issues/2661