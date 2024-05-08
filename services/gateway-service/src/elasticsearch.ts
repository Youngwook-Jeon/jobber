import { winstonLogger } from '@youngwook-jeon/jobber-shared';
import { config } from '@gateway/config';
import { Client } from '@elastic/elasticsearch';

const log = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'apiGatewayElasticConnection', 'debug');

class ElasticSearch {
  private elasticSearchClient: Client;

  constructor() {
    this.elasticSearchClient = new Client({ node: `${config.ELASTIC_SEARCH_URL}` });
  }

  public async checkConnection(): Promise<void> {
    let isConnected = false;
    while (!isConnected) {
      log.info('GatewayService connecting to ElasticSearch');
      try {
        const health = await this.elasticSearchClient.cluster.health({});
        log.info(`GatewayService ElasticSearch health status - ${health.status}`);
        isConnected = true;
      } catch (error) {
        log.error('Connection to ElasticSearch failed, Retrying...');
        log.log('error', 'GatewayService checkConnection() error:', error);
      }
    }
  }
}

export const elasticSearch = new ElasticSearch();
