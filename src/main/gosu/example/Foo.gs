package example

uses com.fasterxml.jackson.databind.annotation.JsonSerialize

public class Foo {

  @JsonSerialize(:using = MuhDeserializer)
//  @JsonSerialize(:using = JsonSerializer.None) //works
  function doSomething(arg : String) : String {
    return "Hello, got the argument '${arg}'"
  }

}
