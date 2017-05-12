package example

uses com.fasterxml.jackson.core.JsonParser
uses com.fasterxml.jackson.databind.DeserializationContext
uses com.fasterxml.jackson.databind.deser.std.StdDeserializer

uses javax.ws.rs.Produces
uses javax.ws.rs.ext.Provider

@Provider
@Produces("application/json")
class MuhDeserializer<T> extends StdDeserializer<T> {

  construct(unused : T) {
    super(T)
  }

  override function deserialize(jsonParser: JsonParser, deserializationContext: DeserializationContext): T {
    return null
  }

}