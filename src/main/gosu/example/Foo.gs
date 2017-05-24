package example

uses io.swagger.annotations.Api

@Api(:value = "Claim")
public class Foo {

  function doSomething(arg : String) : String {
    return "Hello, got the argument '${arg}'"
  }

}
