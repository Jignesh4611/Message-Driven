const { NodeSDK } = require("@opentelemetry/sdk-node");
const {
  PeriodicExportingMetricReader,
} = require("@opentelemetry/sdk-metrics");
const {
  OTLPMetricExporter,
} = require("@opentelemetry/exporter-metrics-otlp-http");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");


const metricExporter = new OTLPMetricExporter({
  url: "http://my-opentelemetry-collector.monitoring.svc.cluster.local:4318/v1/metrics",
});

const sdk = new NodeSDK({
  metricReader: new PeriodicExportingMetricReader({
    exporter: metricExporter,
    exportIntervalMillis: 10000,
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});
sdk.start();

console.log("OpenTelemetry started");