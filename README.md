# example-gradle
Example usage of the Gosu plugin for Gradle

## Build configuration
There are some noticeable differences between usage of the plugin compared to a typical Java project:
  1. The Gosu plugin must be explicitly applied, but it will automatically apply the Java plugin
  2. A compile dependency on `org.gosu-lang.gosu:gosu-core-api` must be specified
  3. `compileGosu` and `compileTestGosu` tasks are automatically added to the build

## Usage/Outcome
Executing `$ ./gradlew clean test` should produce the following output:
```
:clean
:compileJava UP-TO-DATE
:compileGosu
:processResources UP-TO-DATE
:classes
:compileTestJava UP-TO-DATE
:compileTestGosu
:processTestResources UP-TO-DATE
:testClasses
:test

BUILD SUCCESSFUL

```

A HTML record of the test results will be available at `build/reports/tests/index.html`