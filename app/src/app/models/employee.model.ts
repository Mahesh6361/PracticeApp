import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class employee {
  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('password', Number, true)
  public password: number = undefined;

}