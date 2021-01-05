import { Injectable } from '@angular/core';

import { environment } from '../../../../../../environments/environment.prod';
import { Config } from './config';

@Injectable()
export class ConfigService {

  public config: Config = new Config();

  constructor() {
    this.config.api = environment.config.api;
    this.config.url = environment.config.url;
  }

}

