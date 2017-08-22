import { BaseResource, CloudError } from "ms-rest-azure-ts";
import * as moment from "moment";
export { BaseResource, CloudError };
/**
 * @class
 * Initializes a new instance of the PoolUsageMetrics class.
 * @constructor
 * @summary Usage metrics for a pool across an aggregation interval.
 *
 * @member {string} poolId The ID of the pool whose metrics are aggregated in
 * this entry.
 * @member {date} startTime The start time of the aggregation interval covered
 * by this entry.
 * @member {date} endTime The end time of the aggregation interval covered by
 * this entry.
 * @member {string} vmSize The size of virtual machines in the pool. All VMs in
 * a pool are the same size. For information about available sizes of virtual
 * machines for Cloud Services pools (pools created with
 * cloudServiceConfiguration), see Sizes for Cloud Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, STANDARD_A1_V2
 * and STANDARD_A2_V2. For information about available VM sizes for pools using
 * images from the Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {number} totalCoreHours The total core hours used in the pool during
 * this aggregation interval.
 * @member {number} dataIngressGiB The cross data center network ingress to the
 * pool during this interval, in GiB.
 * @member {number} dataEgressGiB The cross data center network egress from the
 * pool during this interval, in GiB.
 */
export interface PoolUsageMetrics {
    poolId: string;
    startTime: Date;
    endTime: Date;
    vmSize: string;
    totalCoreHours: number;
    dataIngressGiB: number;
    dataEgressGiB: number;
}
/**
 * @class
 * Initializes a new instance of the ImageReference class.
 * @constructor
 * @summary A reference to an Azure Virtual Machines Marketplace image. To get
 * the list of all imageReferences verified by Azure Batch, see the 'List
 * supported node agent SKUs' operation.
 *
 * @member {string} publisher The publisher of the Azure Virtual Machines
 * Marketplace image. For example, Canonical or MicrosoftWindowsServer.
 * @member {string} offer The offer type of the Azure Virtual Machines
 * Marketplace image. For example, UbuntuServer or WindowsServer.
 * @member {string} sku The SKU of the Azure Virtual Machines Marketplace
 * image. For example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string} [version] The version of the Azure Virtual Machines
 * Marketplace image. A value of 'latest' can be specified to select the latest
 * version of an image. If omitted, the default is 'latest'.
 */
export interface ImageReference {
    publisher: string;
    offer: string;
    sku: string;
    version?: string;
}
/**
 * @class
 * Initializes a new instance of the NodeAgentSku class.
 * @constructor
 * @summary A node agent SKU supported by the Batch service.
 *
 * The Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems.
 *
 * @member {string} [id] The ID of the node agent SKU.
 * @member {array} [verifiedImageReferences] The list of images verified to be
 * compatible with this node agent SKU. This collection is not exhaustive (the
 * node agent may be compatible with other images).
 * @member {string} [osType] The type of operating system (e.g. Windows or
 * Linux) compatible with the node agent SKU. Possible values include: 'linux',
 * 'windows'
 */
export interface NodeAgentSku {
    id?: string;
    verifiedImageReferences?: ImageReference[];
    osType?: string;
}
/**
 * @class
 * Initializes a new instance of the AuthenticationTokenSettings class.
 * @constructor
 * @summary The settings for an authentication token that the task can use to
 * perform Batch service operations.
 *
 * @member {array} [access] The Batch resources to which the token grants
 * access. The authentication token grants access to a limited set of Batch
 * service operations. Currently the only supported value for the access
 * property is 'job', which grants access to all operations related to the job
 * which contains the task.
 */
export interface AuthenticationTokenSettings {
    access?: string[];
}
/**
 * @class
 * Initializes a new instance of the UsageStatistics class.
 * @constructor
 * @summary Statistics related to pool usage information.
 *
 * @member {date} startTime The start time of the time range covered by the
 * statistics.
 * @member {date} lastUpdateTime The time at which the statistics were last
 * updated. All statistics are limited to the range between startTime and
 * lastUpdateTime.
 * @member {moment.duration} dedicatedCoreTime The aggregated wall-clock time
 * of the dedicated compute node cores being part of the pool.
 */
export interface UsageStatistics {
    startTime: Date;
    lastUpdateTime: Date;
    dedicatedCoreTime: moment.Duration;
}
/**
 * @class
 * Initializes a new instance of the ResourceStatistics class.
 * @constructor
 * @summary Statistics related to resource consumption by compute nodes in a
 * pool.
 *
 * @member {date} startTime The start time of the time range covered by the
 * statistics.
 * @member {date} lastUpdateTime The time at which the statistics were last
 * updated. All statistics are limited to the range between startTime and
 * lastUpdateTime.
 * @member {number} avgCPUPercentage The average CPU usage across all nodes in
 * the pool (percentage per node).
 * @member {number} avgMemoryGiB The average memory usage in GiB across all
 * nodes in the pool.
 * @member {number} peakMemoryGiB The peak memory usage in GiB across all nodes
 * in the pool.
 * @member {number} avgDiskGiB The average used disk space in GiB across all
 * nodes in the pool.
 * @member {number} peakDiskGiB The peak used disk space in GiB across all
 * nodes in the pool.
 * @member {number} diskReadIOps The total number of disk read operations
 * across all nodes in the pool.
 * @member {number} diskWriteIOps The total number of disk write operations
 * across all nodes in the pool.
 * @member {number} diskReadGiB The total amount of data in GiB of disk reads
 * across all nodes in the pool.
 * @member {number} diskWriteGiB The total amount of data in GiB of disk writes
 * across all nodes in the pool.
 * @member {number} networkReadGiB The total amount of data in GiB of network
 * reads across all nodes in the pool.
 * @member {number} networkWriteGiB The total amount of data in GiB of network
 * writes across all nodes in the pool.
 */
export interface ResourceStatistics {
    startTime: Date;
    lastUpdateTime: Date;
    avgCPUPercentage: number;
    avgMemoryGiB: number;
    peakMemoryGiB: number;
    avgDiskGiB: number;
    peakDiskGiB: number;
    diskReadIOps: number;
    diskWriteIOps: number;
    diskReadGiB: number;
    diskWriteGiB: number;
    networkReadGiB: number;
    networkWriteGiB: number;
}
/**
 * @class
 * Initializes a new instance of the PoolStatistics class.
 * @constructor
 * @summary Contains utilization and resource usage statistics for the lifetime
 * of a pool.
 *
 * @member {string} url The URL for the statistics.
 * @member {date} startTime The start time of the time range covered by the
 * statistics.
 * @member {date} lastUpdateTime The time at which the statistics were last
 * updated. All statistics are limited to the range between startTime and
 * lastUpdateTime.
 * @member {object} [usageStats] Statistics related to pool usage, such as the
 * amount of core-time used.
 * @member {date} [usageStats.startTime]
 * @member {date} [usageStats.lastUpdateTime]
 * @member {moment.duration} [usageStats.dedicatedCoreTime]
 * @member {object} [resourceStats] Statistics related to resource consumption
 * by compute nodes in the pool.
 * @member {date} [resourceStats.startTime]
 * @member {date} [resourceStats.lastUpdateTime]
 * @member {number} [resourceStats.avgCPUPercentage]
 * @member {number} [resourceStats.avgMemoryGiB]
 * @member {number} [resourceStats.peakMemoryGiB]
 * @member {number} [resourceStats.avgDiskGiB]
 * @member {number} [resourceStats.peakDiskGiB]
 * @member {number} [resourceStats.diskReadIOps]
 * @member {number} [resourceStats.diskWriteIOps]
 * @member {number} [resourceStats.diskReadGiB]
 * @member {number} [resourceStats.diskWriteGiB]
 * @member {number} [resourceStats.networkReadGiB]
 * @member {number} [resourceStats.networkWriteGiB]
 */
export interface PoolStatistics {
    url: string;
    startTime: Date;
    lastUpdateTime: Date;
    usageStats?: UsageStatistics;
    resourceStats?: ResourceStatistics;
}
/**
 * @class
 * Initializes a new instance of the JobStatistics class.
 * @constructor
 * @summary Resource usage statistics for a job.
 *
 * @member {string} url The URL of the statistics.
 * @member {date} startTime The start time of the time range covered by the
 * statistics.
 * @member {date} lastUpdateTime The time at which the statistics were last
 * updated. All statistics are limited to the range between startTime and
 * lastUpdateTime.
 * @member {moment.duration} userCPUTime The total user mode CPU time (summed
 * across all cores and all compute nodes) consumed by all tasks in the job.
 * @member {moment.duration} kernelCPUTime The total kernel mode CPU time
 * (summed across all cores and all compute nodes) consumed by all tasks in the
 * job.
 * @member {moment.duration} wallClockTime The total wall clock time of all
 * tasks in the job.  The wall clock time is the elapsed time from when the
 * task started running on a compute node to when it finished (or to the last
 * time the statistics were updated, if the task had not finished by then). If
 * a task was retried, this includes the wall clock time of all the task
 * retries.
 * @member {number} readIOps The total number of disk read operations made by
 * all tasks in the job.
 * @member {number} writeIOps The total number of disk write operations made by
 * all tasks in the job.
 * @member {number} readIOGiB The total amount of data in GiB read from disk by
 * all tasks in the job.
 * @member {number} writeIOGiB The total amount of data in GiB written to disk
 * by all tasks in the job.
 * @member {number} numSucceededTasks The total number of tasks successfully
 * completed in the job during the given time range. A task completes
 * successfully if it returns exit code 0.
 * @member {number} numFailedTasks The total number of tasks in the job that
 * failed during the given time range. A task fails if it exhausts its maximum
 * retry count without returning exit code 0.
 * @member {number} numTaskRetries The total number of retries on all the tasks
 * in the job during the given time range.
 * @member {moment.duration} waitTime The total wait time of all tasks in the
 * job. The wait time for a task is defined as the elapsed time between the
 * creation of the task and the start of task execution. (If the task is
 * retried due to failures, the wait time is the time to the most recent task
 * execution.) This value is only reported in the account lifetime statistics;
 * it is not included in the job statistics.
 */
export interface JobStatistics {
    url: string;
    startTime: Date;
    lastUpdateTime: Date;
    userCPUTime: moment.Duration;
    kernelCPUTime: moment.Duration;
    wallClockTime: moment.Duration;
    readIOps: number;
    writeIOps: number;
    readIOGiB: number;
    writeIOGiB: number;
    numSucceededTasks: number;
    numFailedTasks: number;
    numTaskRetries: number;
    waitTime: moment.Duration;
}
/**
 * @class
 * Initializes a new instance of the NameValuePair class.
 * @constructor
 * @summary Represents a name-value pair.
 *
 * @member {string} [name] The name in the name-value pair.
 * @member {string} [value] The value in the name-value pair.
 */
export interface NameValuePair {
    name?: string;
    value?: string;
}
/**
 * @class
 * Initializes a new instance of the DeleteCertificateError class.
 * @constructor
 * @summary An error encountered by the Batch service when deleting a
 * certificate.
 *
 * @member {string} [code] An identifier for the certificate deletion error.
 * Codes are invariant and are intended to be consumed programmatically.
 * @member {string} [message] A message describing the certificate deletion
 * error, intended to be suitable for display in a user interface.
 * @member {array} [values] A list of additional error details related to the
 * certificate deletion error. This list includes details such as the active
 * pools and nodes referencing this certificate. However, if a large number of
 * resources reference the certificate, the list contains only about the first
 * hundred.
 */
export interface DeleteCertificateError {
    code?: string;
    message?: string;
    values?: NameValuePair[];
}
/**
 * @class
 * Initializes a new instance of the Certificate class.
 * @constructor
 * A certificate that can be installed on compute nodes and can be used to
 * authenticate operations on the machine.
 *
 * @member {string} [thumbprint] The X.509 thumbprint of the certificate. This
 * is a sequence of up to 40 hex digits.
 * @member {string} [thumbprintAlgorithm] The algorithm used to derive the
 * thumbprint.
 * @member {string} [url] The URL of the certificate.
 * @member {string} [state] The current state of the certificate. Possible
 * values include: 'active', 'deleting', 'deleteFailed'
 * @member {date} [stateTransitionTime] The time at which the certificate
 * entered its current state.
 * @member {string} [previousState] The previous state of the certificate. This
 * property is not set if the certificate is in its initial active state.
 * Possible values include: 'active', 'deleting', 'deleteFailed'
 * @member {date} [previousStateTransitionTime] The time at which the
 * certificate entered its previous state. This property is not set if the
 * certificate is in its initial Active state.
 * @member {string} [publicData] The public part of the certificate as a
 * base-64 encoded .cer file.
 * @member {object} [deleteCertificateError] The error that occurred on the
 * last attempt to delete this certificate. This property is set only if the
 * certificate is in the DeleteFailed state.
 * @member {string} [deleteCertificateError.code]
 * @member {string} [deleteCertificateError.message]
 * @member {array} [deleteCertificateError.values] This list includes details
 * such as the active pools and nodes referencing this certificate. However, if
 * a large number of resources reference the certificate, the list contains
 * only about the first hundred.
 */
export interface Certificate {
    thumbprint?: string;
    thumbprintAlgorithm?: string;
    url?: string;
    state?: string;
    stateTransitionTime?: Date;
    previousState?: string;
    previousStateTransitionTime?: Date;
    publicData?: string;
    deleteCertificateError?: DeleteCertificateError;
}
/**
 * @class
 * Initializes a new instance of the ApplicationPackageReference class.
 * @constructor
 * @summary A reference to an application package to be deployed to compute
 * nodes.
 *
 * @member {string} applicationId The ID of the application to deploy.
 * @member {string} [version] The version of the application to deploy. If
 * omitted, the default version is deployed. If this is omitted on a pool, and
 * no default version is specified for this application, the request fails with
 * the error code InvalidApplicationPackageReferences and HTTP status code 409.
 * If this is omitted on a task, and no default version is specified for this
 * application, the task fails with a pre-processing error.
 */
export interface ApplicationPackageReference {
    applicationId: string;
    version?: string;
}
/**
 * @class
 * Initializes a new instance of the ApplicationSummary class.
 * @constructor
 * @summary Contains information about an application in an Azure Batch
 * account.
 *
 * @member {string} id A string that uniquely identifies the application within
 * the account.
 * @member {string} displayName The display name for the application.
 * @member {array} versions The list of available versions of the application.
 */
export interface ApplicationSummary {
    id: string;
    displayName: string;
    versions: string[];
}
/**
 * @class
 * Initializes a new instance of the CertificateAddParameter class.
 * @constructor
 * @summary A certificate that can be installed on compute nodes and can be
 * used to authenticate operations on the machine.
 *
 * @member {string} thumbprint The X.509 thumbprint of the certificate. This is
 * a sequence of up to 40 hex digits (it may include spaces but these are
 * removed).
 * @member {string} thumbprintAlgorithm The algorithm used to derive the
 * thumbprint. This must be sha1.
 * @member {string} data The base64-encoded contents of the certificate. The
 * maximum size is 10KB.
 * @member {string} [certificateFormat] The format of the certificate data.
 * Possible values include: 'pfx', 'cer'
 * @member {string} [password] The password to access the certificate's private
 * key. This is required if the certificate format is pfx. It should be omitted
 * if the certificate format is cer.
 */
export interface CertificateAddParameter {
    thumbprint: string;
    thumbprintAlgorithm: string;
    data: string;
    certificateFormat?: string;
    password?: string;
}
/**
 * @class
 * Initializes a new instance of the FileProperties class.
 * @constructor
 * @summary The properties of a file on a compute node.
 *
 * @member {date} [creationTime] The file creation time. The creation time is
 * not returned for files on Linux compute nodes.
 * @member {date} lastModified The time at which the file was last modified.
 * @member {number} contentLength The length of the file.
 * @member {string} [contentType] The content type of the file.
 * @member {string} [fileMode] The file mode attribute in octal format. The
 * file mode is returned only for files on Linux compute nodes.
 */
export interface FileProperties {
    creationTime?: Date;
    lastModified: Date;
    contentLength: number;
    contentType?: string;
    fileMode?: string;
}
/**
 * @class
 * Initializes a new instance of the NodeFile class.
 * @constructor
 * @summary Information about a file or directory on a compute node.
 *
 * @member {string} [name] The file path.
 * @member {string} [url] The URL of the file.
 * @member {boolean} [isDirectory] Whether the object represents a directory.
 * @member {object} [properties] The file properties.
 * @member {date} [properties.creationTime] The creation time is not returned
 * for files on Linux compute nodes.
 * @member {date} [properties.lastModified]
 * @member {number} [properties.contentLength]
 * @member {string} [properties.contentType]
 * @member {string} [properties.fileMode] The file mode is returned only for
 * files on Linux compute nodes.
 */
export interface NodeFile {
    name?: string;
    url?: string;
    isDirectory?: boolean;
    properties?: FileProperties;
}
/**
 * @class
 * Initializes a new instance of the Schedule class.
 * @constructor
 * @summary The schedule according to which jobs will be created
 *
 * @member {date} [doNotRunUntil] The earliest time at which any job may be
 * created under this job schedule. If you do not specify a doNotRunUntil time,
 * the schedule becomes ready to create jobs immediately.
 * @member {date} [doNotRunAfter] A time after which no job will be created
 * under this job schedule. The schedule will move to the completed state as
 * soon as this deadline is past and there is no active job under this job
 * schedule. If you do not specify a doNotRunAfter time, and you are creating a
 * recurring job schedule, the job schedule will remain active until you
 * explicitly terminate it.
 * @member {moment.duration} [startWindow] The time interval, starting from the
 * time at which the schedule indicates a job should be created, within which a
 * job must be created. If a job is not created within the startWindow
 * interval, then the 'opportunity' is lost; no job will be created until the
 * next recurrence of the schedule. If the schedule is recurring, and the
 * startWindow is longer than the recurrence interval, then this is equivalent
 * to an infinite startWindow, because the job that is 'due' in one
 * recurrenceInterval is not carried forward into the next recurrence interval.
 * The default is infinite. The minimum value is 1 minute. If you specify a
 * lower value, the Batch service rejects the schedule with an error; if you
 * are calling the REST API directly, the HTTP status code is 400 (Bad
 * Request).
 * @member {moment.duration} [recurrenceInterval] The time interval between the
 * start times of two successive jobs under the job schedule. A job schedule
 * can have at most one active job under it at any given time. Because a job
 * schedule can have at most one active job under it at any given time, if it
 * is time to create a new job under a job schedule, but the previous job is
 * still running, the Batch service will not create the new job until the
 * previous job finishes. If the previous job does not finish within the
 * startWindow period of the new recurrenceInterval, then no new job will be
 * scheduled for that interval. For recurring jobs, you should normally specify
 * a jobManagerTask in the jobSpecification. If you do not use jobManagerTask,
 * you will need an external process to monitor when jobs are created, add
 * tasks to the jobs and terminate the jobs ready for the next recurrence. The
 * default is that the schedule does not recur: one job is created, within the
 * startWindow after the doNotRunUntil time, and the schedule is complete as
 * soon as that job finishes. The minimum value is 1 minute. If you specify a
 * lower value, the Batch service rejects the schedule with an error; if you
 * are calling the REST API directly, the HTTP status code is 400 (Bad
 * Request).
 */
export interface Schedule {
    doNotRunUntil?: Date;
    doNotRunAfter?: Date;
    startWindow?: moment.Duration;
    recurrenceInterval?: moment.Duration;
}
/**
 * @class
 * Initializes a new instance of the JobConstraints class.
 * @constructor
 * @summary The execution constraints for a job.
 *
 * @member {moment.duration} [maxWallClockTime] The maximum elapsed time that
 * the job may run, measured from the time the job is created. If the job does
 * not complete within the time limit, the Batch service terminates it and any
 * tasks that are still running. In this case, the termination reason will be
 * MaxWallClockTimeExpiry. If this property is not specified, there is no time
 * limit on how long the job may run.
 * @member {number} [maxTaskRetryCount] The maximum number of times each task
 * may be retried. The Batch service retries a task if its exit code is
 * nonzero. Note that this value specifically controls the number of retries.
 * The Batch service will try each task once, and may then retry up to this
 * limit. For example, if the maximum retry count is 3, Batch tries a task up
 * to 4 times (one initial try and 3 retries). If the maximum retry count is 0,
 * the Batch service does not retry tasks. If the maximum retry count is -1,
 * the Batch service retries tasks without limit. The default value is 0 (no
 * retries).
 */
export interface JobConstraints {
    maxWallClockTime?: moment.Duration;
    maxTaskRetryCount?: number;
}
/**
 * @class
 * Initializes a new instance of the ResourceFile class.
 * @constructor
 * @summary A file to be downloaded from Azure blob storage to a compute node.
 *
 * @member {string} blobSource The URL of the file within Azure Blob Storage.
 * This URL must be readable using anonymous access; that is, the Batch service
 * does not present any credentials when downloading the blob. There are two
 * ways to get such a URL for a blob in Azure storage: include a Shared Access
 * Signature (SAS) granting read permissions on the blob, or set the ACL for
 * the blob or its container to allow public access.
 * @member {string} filePath The location on the compute node to which to
 * download the file, relative to the task's working directory.
 * @member {string} [fileMode] The file permission mode attribute in octal
 * format. This property applies only to files being downloaded to Linux
 * compute nodes. It will be ignored if it is specified for a resourceFile
 * which will be downloaded to a Windows node. If this property is not
 * specified for a Linux node, then a default value of 0770 is applied to the
 * file.
 */
export interface ResourceFile {
    blobSource: string;
    filePath: string;
    fileMode?: string;
}
/**
 * @class
 * Initializes a new instance of the EnvironmentSetting class.
 * @constructor
 * @summary An environment variable to be set on a task process.
 *
 * @member {string} name The name of the environment variable.
 * @member {string} [value] The value of the environment variable.
 */
export interface EnvironmentSetting {
    name: string;
    value?: string;
}
/**
 * @class
 * Initializes a new instance of the ExitOptions class.
 * @constructor
 * @summary Specifies how the Batch service responds to a particular exit
 * condition.
 *
 * @member {string} [jobAction] An action to take on the job containing the
 * task, if the task completes with the given exit condition and the job's
 * onTaskFailed property is 'performExitOptionsJobAction'. Values are:
 *
 * none - Take no action.
 * disable - Disable the job. This is equivalent to calling the disable job
 * API, with a disableTasks value of requeue.
 * terminate - Terminate the job. The terminateReason in the job's
 * executionInfo is set to "TaskFailed". The default is none for exit code 0
 * and terminate for all other exit conditions.
 *
 * If the job's onTaskFailed property is noAction, then specifying this
 * property returns an error and the add task request fails with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request). Possible values include: 'none',
 * 'disable', 'terminate'
 * @member {string} [dependencyAction] An action that the Batch service
 * performs on tasks that depend on this task. Values are:
 *
 * satisfy - Satisfy the task's dependencies.
 * block - Block the task's dependencies.
 *
 * The default is 'satisfy' for exit code 0, and 'block' for all other exit
 * conditions. If the job's usesTaskDependencies property is set to false, then
 * specifying the dependencyAction property returns an erro and the add task
 * request fails with an invalid property value error; if you are calling the
 * REST API directly, the HTTP status code is 400  (Bad Request). Possible
 * values include: 'satisfy', 'block'
 */
export interface ExitOptions {
    jobAction?: string;
    dependencyAction?: string;
}
/**
 * @class
 * Initializes a new instance of the ExitCodeMapping class.
 * @constructor
 * @summary How the Batch service should respond if a task exits with a
 * particular exit code.
 *
 * @member {number} code A process exit code.
 * @member {object} exitOptions How the Batch service should respond if the
 * task exits with this exit code.
 * @member {string} [exitOptions.jobAction] Values are:
 *
 * none - Take no action.
 * disable - Disable the job. This is equivalent to calling the disable job
 * API, with a disableTasks value of requeue.
 * terminate - Terminate the job. The terminateReason in the job's
 * executionInfo is set to "TaskFailed". The default is none for exit code 0
 * and terminate for all other exit conditions.
 *
 * If the job's onTaskFailed property is noAction, then specifying this
 * property returns an error and the add task request fails with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request). Possible values include: 'none',
 * 'disable', 'terminate'
 * @member {string} [exitOptions.dependencyAction] Values are:
 *
 * satisfy - Satisfy the task's dependencies.
 * block - Block the task's dependencies.
 *
 * The default is 'satisfy' for exit code 0, and 'block' for all other exit
 * conditions. If the job's usesTaskDependencies property is set to false, then
 * specifying the dependencyAction property returns an erro and the add task
 * request fails with an invalid property value error; if you are calling the
 * REST API directly, the HTTP status code is 400  (Bad Request). Possible
 * values include: 'satisfy', 'block'
 */
export interface ExitCodeMapping {
    code: number;
    exitOptions: ExitOptions;
}
/**
 * @class
 * Initializes a new instance of the ExitCodeRangeMapping class.
 * @constructor
 * @summary A range of exit codes and how the Batch service should respond to
 * exit codes within that range.
 *
 * @member {number} start The first exit code in the range.
 * @member {number} end The last exit code in the range.
 * @member {object} exitOptions How the Batch service should respond if the
 * task exits with an exit code in the range start to end (inclusive).
 * @member {string} [exitOptions.jobAction] Values are:
 *
 * none - Take no action.
 * disable - Disable the job. This is equivalent to calling the disable job
 * API, with a disableTasks value of requeue.
 * terminate - Terminate the job. The terminateReason in the job's
 * executionInfo is set to "TaskFailed". The default is none for exit code 0
 * and terminate for all other exit conditions.
 *
 * If the job's onTaskFailed property is noAction, then specifying this
 * property returns an error and the add task request fails with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request). Possible values include: 'none',
 * 'disable', 'terminate'
 * @member {string} [exitOptions.dependencyAction] Values are:
 *
 * satisfy - Satisfy the task's dependencies.
 * block - Block the task's dependencies.
 *
 * The default is 'satisfy' for exit code 0, and 'block' for all other exit
 * conditions. If the job's usesTaskDependencies property is set to false, then
 * specifying the dependencyAction property returns an erro and the add task
 * request fails with an invalid property value error; if you are calling the
 * REST API directly, the HTTP status code is 400  (Bad Request). Possible
 * values include: 'satisfy', 'block'
 */
export interface ExitCodeRangeMapping {
    start: number;
    end: number;
    exitOptions: ExitOptions;
}
/**
 * @class
 * Initializes a new instance of the ExitConditions class.
 * @constructor
 * @summary Specifies how the Batch service should respond when the task
 * completes.
 *
 * @member {array} [exitCodes] A list of individual task exit codes and how the
 * Batch service should respond to them.
 * @member {array} [exitCodeRanges] A list of task exit code ranges and how the
 * Batch service should respond to them.
 * @member {object} [preProcessingError] How the Batch service should respond
 * if the task fails to start due to an error.
 * @member {string} [preProcessingError.jobAction] Values are:
 *
 * none - Take no action.
 * disable - Disable the job. This is equivalent to calling the disable job
 * API, with a disableTasks value of requeue.
 * terminate - Terminate the job. The terminateReason in the job's
 * executionInfo is set to "TaskFailed". The default is none for exit code 0
 * and terminate for all other exit conditions.
 *
 * If the job's onTaskFailed property is noAction, then specifying this
 * property returns an error and the add task request fails with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request). Possible values include: 'none',
 * 'disable', 'terminate'
 * @member {string} [preProcessingError.dependencyAction] Values are:
 *
 * satisfy - Satisfy the task's dependencies.
 * block - Block the task's dependencies.
 *
 * The default is 'satisfy' for exit code 0, and 'block' for all other exit
 * conditions. If the job's usesTaskDependencies property is set to false, then
 * specifying the dependencyAction property returns an erro and the add task
 * request fails with an invalid property value error; if you are calling the
 * REST API directly, the HTTP status code is 400  (Bad Request). Possible
 * values include: 'satisfy', 'block'
 * @member {object} [fileUploadError] How the Batch service should respond if a
 * file upload error occurs. If the task exited with an exit code that was
 * specified via exitCodes or exitCodeRanges, and then encountered a file
 * upload error, then the action specified by the exit code takes precedence.
 * @member {string} [fileUploadError.jobAction] Values are:
 *
 * none - Take no action.
 * disable - Disable the job. This is equivalent to calling the disable job
 * API, with a disableTasks value of requeue.
 * terminate - Terminate the job. The terminateReason in the job's
 * executionInfo is set to "TaskFailed". The default is none for exit code 0
 * and terminate for all other exit conditions.
 *
 * If the job's onTaskFailed property is noAction, then specifying this
 * property returns an error and the add task request fails with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request). Possible values include: 'none',
 * 'disable', 'terminate'
 * @member {string} [fileUploadError.dependencyAction] Values are:
 *
 * satisfy - Satisfy the task's dependencies.
 * block - Block the task's dependencies.
 *
 * The default is 'satisfy' for exit code 0, and 'block' for all other exit
 * conditions. If the job's usesTaskDependencies property is set to false, then
 * specifying the dependencyAction property returns an erro and the add task
 * request fails with an invalid property value error; if you are calling the
 * REST API directly, the HTTP status code is 400  (Bad Request). Possible
 * values include: 'satisfy', 'block'
 * @member {object} [default] How the Batch service should respond if the task
 * fails with an exit condition not covered by any of the other properties.
 * This value is used if the task exits with any nonzero exit code not listed
 * in the exitCodes or exitCodeRanges collection, with a pre-processing error
 * if the preProcessingError property is not present, or with a file upload
 * error if the fileUploadError property is not present. If you want
 * non-default behaviour on exit code 0, you must list it explicitly using the
 * exitCodes or exitCodeRanges collection.
 * @member {string} [default.jobAction] Values are:
 *
 * none - Take no action.
 * disable - Disable the job. This is equivalent to calling the disable job
 * API, with a disableTasks value of requeue.
 * terminate - Terminate the job. The terminateReason in the job's
 * executionInfo is set to "TaskFailed". The default is none for exit code 0
 * and terminate for all other exit conditions.
 *
 * If the job's onTaskFailed property is noAction, then specifying this
 * property returns an error and the add task request fails with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request). Possible values include: 'none',
 * 'disable', 'terminate'
 * @member {string} [default.dependencyAction] Values are:
 *
 * satisfy - Satisfy the task's dependencies.
 * block - Block the task's dependencies.
 *
 * The default is 'satisfy' for exit code 0, and 'block' for all other exit
 * conditions. If the job's usesTaskDependencies property is set to false, then
 * specifying the dependencyAction property returns an erro and the add task
 * request fails with an invalid property value error; if you are calling the
 * REST API directly, the HTTP status code is 400  (Bad Request). Possible
 * values include: 'satisfy', 'block'
 */
export interface ExitConditions {
    exitCodes?: ExitCodeMapping[];
    exitCodeRanges?: ExitCodeRangeMapping[];
    preProcessingError?: ExitOptions;
    fileUploadError?: ExitOptions;
    default?: ExitOptions;
}
/**
 * @class
 * Initializes a new instance of the AutoUserSpecification class.
 * @constructor
 * @summary Specifies the parameters for the auto user that runs a task on the
 * Batch service.
 *
 * @member {string} [scope] The scope for the auto user. Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [elevationLevel] The elevation level of the auto user.
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 */
export interface AutoUserSpecification {
    scope?: string;
    elevationLevel?: string;
}
/**
 * @class
 * Initializes a new instance of the UserIdentity class.
 * @constructor
 * @summary The definition of the user identity under which the task is run.
 *
 * Specify either the userName or autoUser property, but not both.
 *
 * @member {string} [userName] The name of the user identity under which the
 * task is run. The userName and autoUser properties are mutually exclusive;
 * you must specify one but not both.
 * @member {object} [autoUser] The auto user under which the task is run. The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string} [autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [autoUser.elevationLevel] nonAdmin - The auto user is a
 * standard user without elevated access. admin - The auto user is a user with
 * elevated access and operates with full Administrator permissions. The
 * default value is nonAdmin. Possible values include: 'nonAdmin', 'admin'
 */
export interface UserIdentity {
    userName?: string;
    autoUser?: AutoUserSpecification;
}
/**
 * @class
 * Initializes a new instance of the LinuxUserConfiguration class.
 * @constructor
 * @summary Properties used to create a user account on a Linux node.
 *
 * @member {number} [uid] The user ID of the user account. The uid and gid
 * properties must be specified together or not at all. If not specified the
 * underlying operating system picks the uid.
 * @member {number} [gid] The group ID for the user account. The uid and gid
 * properties must be specified together or not at all. If not specified the
 * underlying operating system picks the gid.
 * @member {string} [sshPrivateKey] The SSH private key for the user account.
 * The private key must not be password protected. The private key is used to
 * automatically configure asymmetric-key based authentication for SSH between
 * nodes in a Linux pool when the pool's enableInterNodeCommunication property
 * is true (it is ignored if enableInterNodeCommunication is false). It does
 * this by placing the key pair into the user's .ssh directory. If not
 * specified, password-less SSH is not configured between nodes (no
 * modification of the user's .ssh directory is done).
 */
export interface LinuxUserConfiguration {
    uid?: number;
    gid?: number;
    sshPrivateKey?: string;
}
/**
 * @class
 * Initializes a new instance of the UserAccount class.
 * @constructor
 * @summary Properties used to create a user used to execute tasks on an Azure
 * Batch node.
 *
 * @member {string} name The name of the user account.
 * @member {string} password The password for the user account.
 * @member {string} [elevationLevel] The elevation level of the user account.
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {object} [linuxUserConfiguration] The Linux-specific user
 * configuration for the user account. This property is ignored if specified on
 * a Windows pool. If not specified, the user is created with the default
 * options.
 * @member {number} [linuxUserConfiguration.uid] The uid and gid properties
 * must be specified together or not at all. If not specified the underlying
 * operating system picks the uid.
 * @member {number} [linuxUserConfiguration.gid] The uid and gid properties
 * must be specified together or not at all. If not specified the underlying
 * operating system picks the gid.
 * @member {string} [linuxUserConfiguration.sshPrivateKey] The private key must
 * not be password protected. The private key is used to automatically
 * configure asymmetric-key based authentication for SSH between nodes in a
 * Linux pool when the pool's enableInterNodeCommunication property is true (it
 * is ignored if enableInterNodeCommunication is false). It does this by
 * placing the key pair into the user's .ssh directory. If not specified,
 * password-less SSH is not configured between nodes (no modification of the
 * user's .ssh directory is done).
 */
export interface UserAccount {
    name: string;
    password: string;
    elevationLevel?: string;
    linuxUserConfiguration?: LinuxUserConfiguration;
}
/**
 * @class
 * Initializes a new instance of the TaskConstraints class.
 * @constructor
 * @summary Execution constraints to apply to a task.
 *
 * @member {moment.duration} [maxWallClockTime] The maximum elapsed time that
 * the task may run, measured from the time the task starts. If the task does
 * not complete within the time limit, the Batch service terminates it. If this
 * is not specified, there is no time limit on how long the task may run.
 * @member {moment.duration} [retentionTime] The minimum time to retain the
 * task directory on the compute node where it ran, from the time it completes
 * execution. After this time, the Batch service may delete the task directory
 * and all its contents. The default is infinite, i.e. the task directory will
 * be retained until the compute node is removed or reimaged.
 * @member {number} [maxTaskRetryCount] The maximum number of times the task
 * may be retried. The Batch service retries a task if its exit code is
 * nonzero. Note that this value specifically controls the number of retries.
 * The Batch service will try the task once, and may then retry up to this
 * limit. For example, if the maximum retry count is 3, Batch tries the task up
 * to 4 times (one initial try and 3 retries). If the maximum retry count is 0,
 * the Batch service does not retry the task. If the maximum retry count is -1,
 * the Batch service retries the task without limit.
 */
export interface TaskConstraints {
    maxWallClockTime?: moment.Duration;
    retentionTime?: moment.Duration;
    maxTaskRetryCount?: number;
}
/**
 * @class
 * Initializes a new instance of the OutputFileBlobContainerDestination class.
 * @constructor
 * @summary Specifies a file upload destination within an Azure blob storage
 * container.
 *
 * @member {string} [path] The destination blob or virtual directory within the
 * Azure Storage container. If filePattern refers to a specific file (i.e.
 * contains no wildcards), then path is the name of the blob to which to upload
 * that file. If filePattern contains one or more wildcards (and therefore may
 * match multiple files), then path is the name of the blob virtual directory
 * (which is prepended to each blob name) to which to upload the file(s). If
 * omitted, file(s) are uploaded to the root of the container with a blob name
 * matching their file name.
 * @member {string} containerUrl The URL of the container within Azure Blob
 * Storage to which to upload the file(s). The URL must include a Shared Access
 * Signature (SAS) granting write permissions to the container.
 */
export interface OutputFileBlobContainerDestination {
    path?: string;
    containerUrl: string;
}
/**
 * @class
 * Initializes a new instance of the OutputFileDestination class.
 * @constructor
 * @summary The destination to which a file should be uploaded.
 *
 * @member {object} [container] A location in Azure blob storage to which files
 * are uploaded.
 * @member {string} [container.path] If filePattern refers to a specific file
 * (i.e. contains no wildcards), then path is the name of the blob to which to
 * upload that file. If filePattern contains one or more wildcards (and
 * therefore may match multiple files), then path is the name of the blob
 * virtual directory (which is prepended to each blob name) to which to upload
 * the file(s). If omitted, file(s) are uploaded to the root of the container
 * with a blob name matching their file name.
 * @member {string} [container.containerUrl] The URL must include a Shared
 * Access Signature (SAS) granting write permissions to the container.
 */
export interface OutputFileDestination {
    container?: OutputFileBlobContainerDestination;
}
/**
 * @class
 * Initializes a new instance of the OutputFileUploadOptions class.
 * @constructor
 * @summary Details about an output file upload operation, including under what
 * conditions to perform the upload.
 *
 * @member {string} uploadCondition The conditions under which the task output
 * file or set of files should be uploaded. The default is taskCompletion.
 * Possible values include: 'taskSuccess', 'taskFailure', 'taskCompletion'
 */
export interface OutputFileUploadOptions {
    uploadCondition: string;
}
/**
 * @class
 * Initializes a new instance of the OutputFile class.
 * @constructor
 * @summary A specification for uploading files from an Azure Batch node to
 * another location after the Batch service has finished executing the task
 * process.
 *
 * @member {string} filePattern A pattern indicating which file(s) to upload.
 * Both relative and absolute paths are supported. Relative paths are relative
 * to the task working directory. The following wildcards are supported: *
 * matches 0 or more characters (for example pattern abc* would match abc or
 * abcdef), ** matches any directory, ? matches any single character, [abc]
 * matches one character in the brackets, and [a-c] matches one character in
 * the range. Brackets can include a negation to match any character not
 * specified (for example [!abc] matches any character but a, b, or c). If a
 * file name starts with "." it is ignored by default but may be matched by
 * specifying it explicitly (for example *.gif will not match .a.gif, but
 * .*.gif will). A simple example: **\*.txt matches any file that does not
 * start in '.' and ends with .txt in the task working directory or any
 * subdirectory. If the filename contains a wildcard character it can be
 * escaped using brackets (for example abc[*] would match a file named abc*).
 * Note that both \ and / are treated as directory separators on Windows, but
 * only / is on Linux. Environment variables (%var% on Windows or $var on
 * Linux) are expanded prior to the pattern being applied.
 * @member {object} destination The destination for the output file(s).
 * @member {object} [destination.container]
 * @member {string} [destination.container.path] If filePattern refers to a
 * specific file (i.e. contains no wildcards), then path is the name of the
 * blob to which to upload that file. If filePattern contains one or more
 * wildcards (and therefore may match multiple files), then path is the name of
 * the blob virtual directory (which is prepended to each blob name) to which
 * to upload the file(s). If omitted, file(s) are uploaded to the root of the
 * container with a blob name matching their file name.
 * @member {string} [destination.container.containerUrl] The URL must include a
 * Shared Access Signature (SAS) granting write permissions to the container.
 * @member {object} uploadOptions Additional options for the upload operation,
 * including under what conditions to perform the upload.
 * @member {string} [uploadOptions.uploadCondition] The default is
 * taskCompletion. Possible values include: 'taskSuccess', 'taskFailure',
 * 'taskCompletion'
 */
export interface OutputFile {
    filePattern: string;
    destination: OutputFileDestination;
    uploadOptions: OutputFileUploadOptions;
}
/**
 * @class
 * Initializes a new instance of the JobManagerTask class.
 * @constructor
 * @summary Specifies details of a Job Manager task.
 *
 * The Job Manager task is automatically started when the job is created. The
 * Batch service tries to schedule the Job Manager task before any other tasks
 * in the job. When shrinking a pool, the Batch service tries to preserve
 * compute nodes where Job Manager tasks are running for as long as possible
 * (that is, nodes running 'normal' tasks are removed before nodes running Job
 * Manager tasks). When a Job Manager task fails and needs to be restarted, the
 * system tries to schedule it at the highest priority. If there are no idle
 * nodes available, the system may terminate one of the running tasks in the
 * pool and return it to the queue in order to make room for the Job Manager
 * task to restart. Note that a Job Manager task in one job does not have
 * priority over tasks in other jobs. Across jobs, only job level priorities
 * are observed. For example, if a Job Manager in a priority 0 job needs to be
 * restarted, it will not displace tasks of a priority 1 job.
 *
 * @member {string} id A string that uniquely identifies the Job Manager task
 * within the job. The ID can contain any combination of alphanumeric
 * characters including hyphens and underscores and cannot contain more than 64
 * characters.
 * @member {string} [displayName] The display name of the Job Manager task. It
 * need not be unique and can contain any Unicode characters up to a maximum
 * length of 1024.
 * @member {string} commandLine The command line of the Job Manager task. The
 * command line does not run under a shell, and therefore cannot take advantage
 * of shell features such as environment variable expansion. If you want to
 * take advantage of such features, you should invoke the shell in the command
 * line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array} [resourceFiles] A list of files that the Batch service will
 * download to the compute node before running the command line. Files listed
 * under this element are located in the task's working directory.
 * @member {array} [outputFiles] A list of files that the Batch service will
 * upload from the compute node after running the command line. For
 * multi-instance tasks, the files will only be uploaded from the compute node
 * on which the primary task is executed.
 * @member {array} [environmentSettings] A list of environment variable
 * settings for the Job Manager task.
 * @member {object} [constraints] Constraints that apply to the Job Manager
 * task.
 * @member {moment.duration} [constraints.maxWallClockTime] If this is not
 * specified, there is no time limit on how long the task may run.
 * @member {moment.duration} [constraints.retentionTime] The default is
 * infinite, i.e. the task directory will be retained until the compute node is
 * removed or reimaged.
 * @member {number} [constraints.maxTaskRetryCount] Note that this value
 * specifically controls the number of retries. The Batch service will try the
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * the task. If the maximum retry count is -1, the Batch service retries the
 * task without limit.
 * @member {boolean} [killJobOnCompletion] Whether completion of the Job
 * Manager task signifies completion of the entire job. If true, when the Job
 * Manager task completes, the Batch service marks the job as complete. If any
 * tasks are still running at this time (other than Job Release), those tasks
 * are terminated. If false, the completion of the Job Manager task does not
 * affect the job status. In this case, you should either use the
 * onAllTasksComplete attribute to terminate the job, or have a client or user
 * terminate the job explicitly. An example of this is if the Job Manager
 * creates a set of tasks but then takes no further role in their execution.
 * The default value is true. If you are using the onAllTasksComplete and
 * onTaskFailure attributes to control job lifetime, and using the Job Manager
 * task only to create the tasks for the job (not to monitor progress), then it
 * is important to set killJobOnCompletion to false.
 * @member {object} [userIdentity] The user identity under which the Job
 * Manager task runs. If omitted, the task runs as a non-administrative user
 * unique to the task.
 * @member {string} [userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {object} [userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {string} [userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [userIdentity.autoUser.elevationLevel] nonAdmin - The auto
 * user is a standard user without elevated access. admin - The auto user is a
 * user with elevated access and operates with full Administrator permissions.
 * The default value is nonAdmin. Possible values include: 'nonAdmin', 'admin'
 * @member {boolean} [runExclusive] Whether the Job Manager task requires
 * exclusive use of the compute node where it runs. If true, no other tasks
 * will run on the same compute node for as long as the Job Manager is running.
 * If false, other tasks can run simultaneously with the Job Manager on a
 * compute node. The Job Manager task counts normally against the node's
 * concurrent task limit, so this is only relevant if the node allows multiple
 * concurrent tasks. The default value is true.
 * @member {array} [applicationPackageReferences] A list of application
 * packages that the Batch service will deploy to the compute node before
 * running the command line. Application packages are downloaded and deployed
 * to a shared directory, not the task working directory. Therefore, if a
 * referenced package is already on the compute node, and is up to date, then
 * it is not re-downloaded; the existing copy on the compute node is used. If a
 * referenced application package cannot be installed, for example because the
 * package has been deleted or because download failed, the task fails.
 * @member {object} [authenticationTokenSettings] The settings for an
 * authentication token that the task can use to perform Batch service
 * operations. If this property is set, the Batch service provides the task
 * with an authentication token which can be used to authenticate Batch service
 * operations without requiring an account access key. The token is provided
 * via the AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations
 * that the task can carry out using the token depend on the settings. For
 * example, a task can request job permissions in order to add other tasks to
 * the job, or check the status of the job or of other tasks under the job.
 * @member {array} [authenticationTokenSettings.access] The authentication
 * token grants access to a limited set of Batch service operations. Currently
 * the only supported value for the access property is 'job', which grants
 * access to all operations related to the job which contains the task.
 * @member {boolean} [allowLowPriorityNode] Whether the Job Manager task may
 * run on a low-priority compute node. The default value is false.
 */
export interface JobManagerTask {
    id: string;
    displayName?: string;
    commandLine: string;
    resourceFiles?: ResourceFile[];
    outputFiles?: OutputFile[];
    environmentSettings?: EnvironmentSetting[];
    constraints?: TaskConstraints;
    killJobOnCompletion?: boolean;
    userIdentity?: UserIdentity;
    runExclusive?: boolean;
    applicationPackageReferences?: ApplicationPackageReference[];
    authenticationTokenSettings?: AuthenticationTokenSettings;
    allowLowPriorityNode?: boolean;
}
/**
 * @class
 * Initializes a new instance of the JobPreparationTask class.
 * @constructor
 * @summary A Job Preparation task to run before any tasks of the job on any
 * given compute node.
 *
 * You can use Job Preparation to prepare a compute node to run tasks for the
 * job. Activities commonly performed in Job Preparation include: Downloading
 * common resource files used by all the tasks in the job. The Job Preparation
 * task can download these common resource files to the shared location on the
 * compute node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service
 * on the compute node so that all tasks of that job can communicate with it.
 * If the Job Preparation task fails (that is, exhausts its retry count before
 * exiting with exit code 0), Batch will not run tasks of this job on the
 * compute node. The node remains ineligible to run tasks of this job until it
 * is reimaged. The node remains active and can be used for other jobs. The Job
 * Preparation task can run multiple times on the same compute node. Therefore,
 * you should write the Job Preparation task to handle re-execution. If the
 * compute node is rebooted, the Job Preparation task is run again on the node
 * before scheduling any other task of the job, if
 * rerunOnNodeRebootAfterSuccess is true or if the Job Preparation task did not
 * previously complete. If the compute node is reimaged, the Job Preparation
 * task is run again before scheduling any task of the job.
 *
 * @member {string} [id] A string that uniquely identifies the Job Preparation
 * task within the job. The ID can contain any combination of alphanumeric
 * characters including hyphens and underscores and cannot contain more than 64
 * characters. If you do not specify this property, the Batch service assigns a
 * default value of 'jobpreparation'. No other task in the job can have the
 * same ID as the Job Preparation task. If you try to submit a task with the
 * same id, the Batch service rejects the request with error code
 * TaskIdSameAsJobPreparationTask; if you are calling the REST API directly,
 * the HTTP status code is 409 (Conflict).
 * @member {string} commandLine The command line of the Job Preparation task.
 * The command line does not run under a shell, and therefore cannot take
 * advantage of shell features such as environment variable expansion. If you
 * want to take advantage of such features, you should invoke the shell in the
 * command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array} [resourceFiles] A list of files that the Batch service will
 * download to the compute node before running the command line. Files listed
 * under this element are located in the task's working directory.
 * @member {array} [environmentSettings] A list of environment variable
 * settings for the Job Preparation task.
 * @member {object} [constraints] Constraints that apply to the Job Preparation
 * task.
 * @member {moment.duration} [constraints.maxWallClockTime] If this is not
 * specified, there is no time limit on how long the task may run.
 * @member {moment.duration} [constraints.retentionTime] The default is
 * infinite, i.e. the task directory will be retained until the compute node is
 * removed or reimaged.
 * @member {number} [constraints.maxTaskRetryCount] Note that this value
 * specifically controls the number of retries. The Batch service will try the
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * the task. If the maximum retry count is -1, the Batch service retries the
 * task without limit.
 * @member {boolean} [waitForSuccess] Whether the Batch service should wait for
 * the Job Preparation task to complete successfully before scheduling any
 * other tasks of the job on the compute node. A Job Preparation task has
 * completed successfully if it exits with exit code 0. If true and the Job
 * Preparation task fails on a compute node, the Batch service retries the Job
 * Preparation task up to its maximum retry count (as specified in the
 * constraints element). If the task has still not completed successfully after
 * all retries, then the Batch service will not schedule tasks of the job to
 * the compute node. The compute node remains active and eligible to run tasks
 * of other jobs. If false, the Batch service will not wait for the Job
 * Preparation task to complete. In this case, other tasks of the job can start
 * executing on the compute node while the Job Preparation task is still
 * running; and even if the Job Preparation task fails, new tasks will continue
 * to be scheduled on the node. The default value is true.
 * @member {object} [userIdentity] The user identity under which the Job
 * Preparation task runs. If omitted, the task runs as a non-administrative
 * user unique to the task on Windows nodes, or a a non-administrative user
 * unique to the pool on Linux nodes.
 * @member {string} [userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {object} [userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {string} [userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [userIdentity.autoUser.elevationLevel] nonAdmin - The auto
 * user is a standard user without elevated access. admin - The auto user is a
 * user with elevated access and operates with full Administrator permissions.
 * The default value is nonAdmin. Possible values include: 'nonAdmin', 'admin'
 * @member {boolean} [rerunOnNodeRebootAfterSuccess] Whether the Batch service
 * should rerun the Job Preparation task after a compute node reboots. The Job
 * Preparation task is always rerun if a compute node is reimaged, or if the
 * Job Preparation task did not complete (e.g. because the reboot occurred
 * while the task was running). Therefore, you should always write a Job
 * Preparation task to be idempotent and to behave correctly if run multiple
 * times. The default value is true.
 */
export interface JobPreparationTask {
    id?: string;
    commandLine: string;
    resourceFiles?: ResourceFile[];
    environmentSettings?: EnvironmentSetting[];
    constraints?: TaskConstraints;
    waitForSuccess?: boolean;
    userIdentity?: UserIdentity;
    rerunOnNodeRebootAfterSuccess?: boolean;
}
/**
 * @class
 * Initializes a new instance of the JobReleaseTask class.
 * @constructor
 * @summary A Job Release task to run on job completion on any compute node
 * where the job has run.
 *
 * The Job Release task runs when the job ends, because of one of the
 * following: The user calls the Terminate Job API, or the Delete Job API while
 * the job is still active, the job's maximum wall clock time constraint is
 * reached, and the job is still active, or the job's Job Manager task
 * completed, and the job is configured to terminate when the Job Manager
 * completes. The Job Release task runs on each compute node where tasks of the
 * job have run and the Job Preparation task ran and completed. If you reimage
 * a compute node after it has run the Job Preparation task, and the job ends
 * without any further tasks of the job running on that compute node (and hence
 * the Job Preparation task does not re-run), then the Job Release task does
 * not run on that node. If a compute node reboots while the Job Release task
 * is still running, the Job Release task runs again when the compute node
 * starts up. The job is not marked as complete until all Job Release tasks
 * have completed. The Job Release task runs in the background. It does not
 * occupy a scheduling slot; that is, it does not count towards the
 * maxTasksPerNode limit specified on the pool.
 *
 * @member {string} [id] A string that uniquely identifies the Job Release task
 * within the job. The ID can contain any combination of alphanumeric
 * characters including hyphens and underscores and cannot contain more than 64
 * characters. If you do not specify this property, the Batch service assigns a
 * default value of 'jobrelease'. No other task in the job can have the same ID
 * as the Job Release task. If you try to submit a task with the same id, the
 * Batch service rejects the request with error code
 * TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the
 * HTTP status code is 409 (Conflict).
 * @member {string} commandLine The command line of the Job Release task. The
 * command line does not run under a shell, and therefore cannot take advantage
 * of shell features such as environment variable expansion. If you want to
 * take advantage of such features, you should invoke the shell in the command
 * line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array} [resourceFiles] A list of files that the Batch service will
 * download to the compute node before running the command line. Files listed
 * under this element are located in the task's working directory.
 * @member {array} [environmentSettings] A list of environment variable
 * settings for the Job Release task.
 * @member {moment.duration} [maxWallClockTime] The maximum elapsed time that
 * the Job Release task may run on a given compute node, measured from the time
 * the task starts. If the task does not complete within the time limit, the
 * Batch service terminates it. The default value is 15 minutes. You may not
 * specify a timeout longer than 15 minutes. If you do, the Batch service
 * rejects it with an error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request).
 * @member {moment.duration} [retentionTime] The minimum time to retain the
 * task directory for the Job Release task on the compute node. After this
 * time, the Batch service may delete the task directory and all its contents.
 * The default is infinite, i.e. the task directory will be retained until the
 * compute node is removed or reimaged.
 * @member {object} [userIdentity] The user identity under which the Job
 * Release task runs. If omitted, the task runs as a non-administrative user
 * unique to the task.
 * @member {string} [userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {object} [userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {string} [userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [userIdentity.autoUser.elevationLevel] nonAdmin - The auto
 * user is a standard user without elevated access. admin - The auto user is a
 * user with elevated access and operates with full Administrator permissions.
 * The default value is nonAdmin. Possible values include: 'nonAdmin', 'admin'
 */
export interface JobReleaseTask {
    id?: string;
    commandLine: string;
    resourceFiles?: ResourceFile[];
    environmentSettings?: EnvironmentSetting[];
    maxWallClockTime?: moment.Duration;
    retentionTime?: moment.Duration;
    userIdentity?: UserIdentity;
}
/**
 * @class
 * Initializes a new instance of the TaskSchedulingPolicy class.
 * @constructor
 * @summary Specifies how tasks should be distributed across compute nodes.
 *
 * @member {string} nodeFillType How tasks are distributed across compute nodes
 * in a pool. Values are:
 *
 * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
 * each node in the pool before any tasks are assigned to the next node in the
 * pool.
 * spread - Tasks should be assigned evenly across all nodes in the pool.
 * Possible values include: 'spread', 'pack'
 */
export interface TaskSchedulingPolicy {
    nodeFillType: string;
}
/**
 * @class
 * Initializes a new instance of the StartTask class.
 * @constructor
 * @summary A task which is run when a compute node joins a pool in the Azure
 * Batch service, or when the compute node is rebooted or reimaged.
 *
 * @member {string} commandLine The command line of the start task. The command
 * line does not run under a shell, and therefore cannot take advantage of
 * shell features such as environment variable expansion. If you want to take
 * advantage of such features, you should invoke the shell in the command line,
 * for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in
 * Linux.
 * @member {array} [resourceFiles] A list of files that the Batch service will
 * download to the compute node before running the command line. Files listed
 * under this element are located in the task's working directory.
 * @member {array} [environmentSettings] A list of environment variable
 * settings for the start task.
 * @member {object} [userIdentity] The user identity under which the start task
 * runs. If omitted, the task runs as a non-administrative user unique to the
 * task.
 * @member {string} [userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {object} [userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {string} [userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [userIdentity.autoUser.elevationLevel] nonAdmin - The auto
 * user is a standard user without elevated access. admin - The auto user is a
 * user with elevated access and operates with full Administrator permissions.
 * The default value is nonAdmin. Possible values include: 'nonAdmin', 'admin'
 * @member {number} [maxTaskRetryCount] The maximum number of times the task
 * may be retried. The Batch service retries a task if its exit code is
 * nonzero. Note that this value specifically controls the number of retries.
 * The Batch service will try the task once, and may then retry up to this
 * limit. For example, if the maximum retry count is 3, Batch tries the task up
 * to 4 times (one initial try and 3 retries). If the maximum retry count is 0,
 * the Batch service does not retry the task. If the maximum retry count is -1,
 * the Batch service retries the task without limit.
 * @member {boolean} [waitForSuccess] Whether the Batch service should wait for
 * the start task to complete successfully (that is, to exit with exit code 0)
 * before scheduling any tasks on the compute node. If true and the start task
 * fails on a compute node, the Batch service retries the start task up to its
 * maximum retry count (maxTaskRetryCount). If the task has still not completed
 * successfully after all retries, then the Batch service marks the compute
 * node unusable, and will not schedule tasks to it. This condition can be
 * detected via the node state and failure info details. If false, the Batch
 * service will not wait for the start task to complete. In this case, other
 * tasks can start executing on the compute node while the start task is still
 * running; and even if the start task fails, new tasks will continue to be
 * scheduled on the node. The default is false.
 */
export interface StartTask {
    commandLine: string;
    resourceFiles?: ResourceFile[];
    environmentSettings?: EnvironmentSetting[];
    userIdentity?: UserIdentity;
    maxTaskRetryCount?: number;
    waitForSuccess?: boolean;
}
/**
 * @class
 * Initializes a new instance of the CertificateReference class.
 * @constructor
 * @summary A reference to a certificate to be installed on compute nodes in a
 * pool.
 *
 * @member {string} thumbprint The thumbprint of the certificate.
 * @member {string} thumbprintAlgorithm The algorithm with which the thumbprint
 * is associated. This must be sha1.
 * @member {string} [storeLocation] The location of the certificate store on
 * the compute node into which to install the certificate. The default value is
 * currentUser. This property is applicable only for pools configured with
 * Windows nodes (that is, created with cloudServiceConfiguration, or with
 * virtualMachineConfiguration using a Windows image reference). For Linux
 * compute nodes, the certificates are stored in a directory inside the task
 * working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is
 * supplied to the task to query for this location. For certificates with
 * visibility of 'remoteUser', a 'certs' directory is created in the user's
 * home directory (e.g., /home/{user-name}/certs) and certificates are placed
 * in that directory. Possible values include: 'currentUser', 'localMachine'
 * @member {string} [storeName] The name of the certificate store on the
 * compute node into which to install the certificate. This property is
 * applicable only for pools configured with Windows nodes (that is, created
 * with cloudServiceConfiguration, or with virtualMachineConfiguration using a
 * Windows image reference). Common store names include: My, Root, CA, Trust,
 * Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any
 * custom store name can also be used. The default value is My.
 * @member {array} [visibility] Which user accounts on the compute node should
 * have access to the private data of the certificate. Values are:
 *
 * starttask - The user account under which the start task is run.
 * task - The accounts under which job tasks are run.
 * remoteuser - The accounts under which users remotely access the node.
 *
 * You can specify more than one visibility in this collection. The default is
 * all accounts.
 */
export interface CertificateReference {
    thumbprint: string;
    thumbprintAlgorithm: string;
    storeLocation?: string;
    storeName?: string;
    visibility?: string[];
}
/**
 * @class
 * Initializes a new instance of the MetadataItem class.
 * @constructor
 * @summary A name-value pair associated with a Batch service resource.
 *
 * The Batch service does not assign any meaning to this metadata; it is solely
 * for the use of user code.
 *
 * @member {string} name The name of the metadata item.
 * @member {string} value The value of the metadata item.
 */
export interface MetadataItem {
    name: string;
    value: string;
}
/**
 * @class
 * Initializes a new instance of the CloudServiceConfiguration class.
 * @constructor
 * @summary The configuration for nodes in a pool based on the Azure Cloud
 * Services platform.
 *
 * @member {string} osFamily The Azure Guest OS family to be installed on the
 * virtual machines in the pool. Possible values are: 2 - OS Family 2,
 * equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to
 * Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2.
 * 5 - OS Family 5, equivalent to Windows Server 2016. For more information,
 * see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string} [targetOSVersion] The Azure Guest OS version to be
 * installed on the virtual machines in the pool. The default value is * which
 * specifies the latest operating system version for the specified OS family.
 * @member {string} [currentOSVersion] The Azure Guest OS Version currently
 * installed on the virtual machines in the pool. This may differ from
 * targetOSVersion if the pool state is Upgrading. In this case some virtual
 * machines may be on the targetOSVersion and some may be on the
 * currentOSVersion during the upgrade process. Once all virtual machines have
 * upgraded, currentOSVersion is updated to be the same as targetOSVersion.
 */
export interface CloudServiceConfiguration {
    osFamily: string;
    targetOSVersion?: string;
    currentOSVersion?: string;
}
/**
 * @class
 * Initializes a new instance of the OSDisk class.
 * @constructor
 * @summary A reference to an OS disk image.
 *
 * @member {array} imageUris The collection of Virtual Hard Disk (VHD) URIs.
 * All the VHDs must be identical and must reside in an Azure Storage account
 * within the same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string} [caching] The type of caching to enable for the OS disk.
 * Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 */
export interface OSDisk {
    imageUris: string[];
    caching?: string;
}
/**
 * @class
 * Initializes a new instance of the WindowsConfiguration class.
 * @constructor
 * @summary Windows operating system settings to apply to the virtual machine.
 *
 * @member {boolean} [enableAutomaticUpdates] Whether automatic updates are
 * enabled on the virtual machine. If omitted, the default value is true.
 */
export interface WindowsConfiguration {
    enableAutomaticUpdates?: boolean;
}
/**
 * @class
 * Initializes a new instance of the VirtualMachineConfiguration class.
 * @constructor
 * @summary The configuration for compute nodes in a pool based on the Azure
 * Virtual Machines infrastructure.
 *
 * @member {object} [imageReference] A reference to the Azure Virtual Machines
 * Marketplace image to use. This property and osDisk are mutually exclusive
 * and one of the properties must be specified.
 * @member {string} [imageReference.publisher] For example, Canonical or
 * MicrosoftWindowsServer.
 * @member {string} [imageReference.offer] For example, UbuntuServer or
 * WindowsServer.
 * @member {string} [imageReference.sku] For example, 14.04.0-LTS or
 * 2012-R2-Datacenter.
 * @member {string} [imageReference.version] A value of 'latest' can be
 * specified to select the latest version of an image. If omitted, the default
 * is 'latest'.
 * @member {object} [osDisk] A reference to the OS disk image to use. This
 * property can be specified only if the Batch account was created with its
 * poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 * @member {array} [osDisk.imageUris] All the VHDs must be identical and must
 * reside in an Azure Storage account within the same subscription and same
 * region as the Batch account. For best performance, it is recommended that
 * each VHD resides in a separate Azure Storage account. Each VHD can serve
 * upto 20 Windows compute nodes or 40 Linux compute nodes. You must supply
 * enough VHD URIs to satisfy the 'targetDedicated' property of the pool. If
 * you do not supply enough VHD URIs, the pool will partially allocate compute
 * nodes, and a resize error will occur.
 * @member {string} [osDisk.caching] Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string} nodeAgentSKUId The SKU of the Batch node agent to be
 * provisioned on compute nodes in the pool. The Batch node agent is a program
 * that runs on each node in the pool, and provides the command-and-control
 * interface between the node and the Batch service. There are different
 * implementations of the node agent, known as SKUs, for different operating
 * systems. You must specify a node agent SKU which matches the selected image
 * reference. To get the list of supported node agent SKUs along with their
 * list of verified image references, see the 'List supported node agent SKUs'
 * operation.
 * @member {object} [windowsConfiguration] Windows operating system settings on
 * the virtual machine. This property must not be specified if the
 * imageReference or osDisk property specifies a Linux OS image.
 * @member {boolean} [windowsConfiguration.enableAutomaticUpdates] If omitted,
 * the default value is true.
 */
export interface VirtualMachineConfiguration {
    imageReference?: ImageReference;
    osDisk?: OSDisk;
    nodeAgentSKUId: string;
    windowsConfiguration?: WindowsConfiguration;
}
/**
 * @class
 * Initializes a new instance of the NetworkSecurityGroupRule class.
 * @constructor
 * @summary A network security group rule to apply to an inbound endpoint.
 *
 * @member {number} priority The priority for this rule. Priorities within a
 * pool must be unique and are evaluated in order of priority. The lower the
 * number the higher the priority. For example, rules could be specified with
 * order numbers of 150, 250, and 350. The rule with the order number of 150
 * takes precedence over the rule that has an order of 250. Allowed priorities
 * are 150 to 3500. If any reserved or duplicate values are provided the
 * request fails with HTTP status code 400.
 * @member {string} access The action that should be taken for a specified IP
 * address, subnet range or tag. Possible values include: 'allow', 'deny'
 * @member {string} sourceAddressPrefix The source address prefix or tag to
 * match for the rule. Valid values are a single IP address (i.e. 10.10.10.10),
 * IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If
 * any other values are provided the request fails with HTTP status code 400.
 */
export interface NetworkSecurityGroupRule {
    priority: number;
    access: string;
    sourceAddressPrefix: string;
}
/**
 * @class
 * Initializes a new instance of the InboundNATPool class.
 * @constructor
 * @summary A inbound NAT pool that can be used to address specific ports on
 * compute nodes in a Batch pool externally.
 *
 * @member {string} name The name of the endpoint. The name must be unique
 * within a Batch pool, can contain letters, numbers, underscores, periods, and
 * hyphens. Names must start with a letter or number, must end with a letter,
 * number, or underscore, and cannot exceed 77 characters.  If any invalid
 * values are provided the request fails with HTTP status code 400.
 * @member {string} protocol The protocol of the endpoint. Possible values
 * include: 'tcp', 'udp'
 * @member {number} backendPort The port number on the compute node. This must
 * be unique within a Batch pool. Acceptable values are between 1 and 65535
 * except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved
 * values are provided the request fails with HTTP status code 400.
 * @member {number} frontendPortRangeStart The first port number in the range
 * of external ports that will be used to provide inbound access to the
 * backendPort on individual compute nodes. Acceptable values range between 1
 * and 65534 except ports from 50000 to 55000 which are reserved. All ranges
 * within a pool must be distinct and cannot overlap. If any reserved or
 * overlapping values are provided the request fails with HTTP status code 400.
 * @member {number} frontendPortRangeEnd The last port number in the range of
 * external ports that will be used to provide inbound access to the
 * backendPort on individual compute nodes. Acceptable values range between 1
 * and 65534 except ports from 50000 to 55000 which are reserved by the Batch
 * service. All ranges within a pool must be distinct and cannot overlap. If
 * any reserved or overlapping values are provided the request fails with HTTP
 * status code 400.
 * @member {array} [networkSecurityGroupRules] A list of network security group
 * rules that will be applied to the endpoint. The maximum number of rules that
 * can be specified across all the endpoints on a Batch pool is 25. If no
 * network security group rules are specified, a default rule will be created
 * to allow inbound access to the specified backendPort. If the maximum number
 * of network security group rules is exceeded the request fails with HTTP
 * status code 400.
 */
export interface InboundNATPool {
    name: string;
    protocol: string;
    backendPort: number;
    frontendPortRangeStart: number;
    frontendPortRangeEnd: number;
    networkSecurityGroupRules?: NetworkSecurityGroupRule[];
}
/**
 * @class
 * Initializes a new instance of the PoolEndpointConfiguration class.
 * @constructor
 * @summary The endpoint configuration for a pool.
 *
 * @member {array} inboundNATPools A list of inbound NAT pools that can be used
 * to address specific ports on an individual compute node externally. The
 * maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 */
export interface PoolEndpointConfiguration {
    inboundNATPools: InboundNATPool[];
}
/**
 * @class
 * Initializes a new instance of the NetworkConfiguration class.
 * @constructor
 * The network configuration for a pool.
 *
 * @member {string} [subnetId] The ARM resource identifier of the virtual
 * network subnet which the compute nodes of the pool will join. This is of the
 * form
 * /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}.
 * The virtual network must be in the same region and subscription as the Azure
 * Batch account. The specified subnet should have enough free IP addresses to
 * accommodate the number of nodes in the pool. If the subnet doesn't have
 * enough free IP addresses, the pool will partially allocate compute nodes,
 * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
 * must have the 'Classic Virtual Machine Contributor' Role-Based Access
 * Control (RBAC) role for the specified VNet. The specified subnet must allow
 * communication from the Azure Batch service to be able to schedule tasks on
 * the compute nodes. This can be verified by checking if the specified VNet
 * has any associated Network Security Groups (NSG). If communication to the
 * compute nodes in the specified subnet is denied by an NSG, then the Batch
 * service will set the state of the compute nodes to unusable. For pools
 * created via virtualMachineConfiguration the Batch account must have
 * poolAllocationMode userSubscription in order to use a VNet. If the specified
 * VNet has any associated Network Security Groups (NSG), then a few reserved
 * system ports must be enabled for inbound communication. For pools created
 * with a virtual machine configuration, enable ports 29876 and 29877, as well
 * as port 22 for Linux and port 3389 for Windows. For pools created with a
 * cloud service configuration, enable ports 10100, 20100, and 30100. Also
 * enable outbound connections to Azure Storage on port 443. For more details
 * see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object} [endpointConfiguration] The configuration for endpoints on
 * compute nodes in the Batch pool. Pool endpoint configuration is only
 * supported on pools with the virtualMachineConfiguration property.
 * @member {array} [endpointConfiguration.inboundNATPools] The maximum number
 * of inbound NAT pools per Batch pool is 5. If the maximum number of inbound
 * NAT pools is exceeded the request fails with HTTP status code 400.
 */
export interface NetworkConfiguration {
    subnetId?: string;
    endpointConfiguration?: PoolEndpointConfiguration;
}
/**
 * @class
 * Initializes a new instance of the PoolSpecification class.
 * @constructor
 * @summary Specification for creating a new pool.
 *
 * @member {string} [displayName] The display name for the pool. The display
 * name need not be unique and can contain any Unicode characters up to a
 * maximum length of 1024.
 * @member {string} vmSize The size of the virtual machines in the pool. All
 * virtual machines in a pool are the same size. For information about
 * available sizes of virtual machines for Cloud Services pools (pools created
 * with cloudServiceConfiguration), see Sizes for Cloud Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object} [cloudServiceConfiguration] The cloud service configuration
 * for the pool. This property must be specified if the pool needs to be
 * created with Azure PaaS VMs. This property and virtualMachineConfiguration
 * are mutually exclusive and one of the properties must be specified. If
 * neither is specified then the Batch service returns an error; if you are
 * calling the REST API directly, the HTTP status code is 400 (Bad Request).
 * This property cannot be specified if the Batch account was created with its
 * poolAllocationMode property set to 'UserSubscription'.
 * @member {string} [cloudServiceConfiguration.osFamily] Possible values are: 2
 * - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3,
 * equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows
 * Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. For more
 * information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string} [cloudServiceConfiguration.targetOSVersion] The default
 * value is * which specifies the latest operating system version for the
 * specified OS family.
 * @member {string} [cloudServiceConfiguration.currentOSVersion] This may
 * differ from targetOSVersion if the pool state is Upgrading. In this case
 * some virtual machines may be on the targetOSVersion and some may be on the
 * currentOSVersion during the upgrade process. Once all virtual machines have
 * upgraded, currentOSVersion is updated to be the same as targetOSVersion.
 * @member {object} [virtualMachineConfiguration] The virtual machine
 * configuration for the pool. This property must be specified if the pool
 * needs to be created with Azure IaaS VMs. This property and
 * cloudServiceConfiguration are mutually exclusive and one of the properties
 * must be specified. If neither is specified then the Batch service returns an
 * error; if you are calling the REST API directly, the HTTP status code is 400
 * (Bad Request).
 * @member {object} [virtualMachineConfiguration.imageReference] This property
 * and osDisk are mutually exclusive and one of the properties must be
 * specified.
 * @member {string} [virtualMachineConfiguration.imageReference.publisher] For
 * example, Canonical or MicrosoftWindowsServer.
 * @member {string} [virtualMachineConfiguration.imageReference.offer] For
 * example, UbuntuServer or WindowsServer.
 * @member {string} [virtualMachineConfiguration.imageReference.sku] For
 * example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string} [virtualMachineConfiguration.imageReference.version] A
 * value of 'latest' can be specified to select the latest version of an image.
 * If omitted, the default is 'latest'.
 * @member {object} [virtualMachineConfiguration.osDisk] This property can be
 * specified only if the Batch account was created with its poolAllocationMode
 * property set to 'UserSubscription'. This property and imageReference are
 * mutually exclusive and one of the properties must be specified.
 * @member {array} [virtualMachineConfiguration.osDisk.imageUris] All the VHDs
 * must be identical and must reside in an Azure Storage account within the
 * same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string} [virtualMachineConfiguration.osDisk.caching] Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string} [virtualMachineConfiguration.nodeAgentSKUId] The Batch node
 * agent is a program that runs on each node in the pool, and provides the
 * command-and-control interface between the node and the Batch service. There
 * are different implementations of the node agent, known as SKUs, for
 * different operating systems. You must specify a node agent SKU which matches
 * the selected image reference. To get the list of supported node agent SKUs
 * along with their list of verified image references, see the 'List supported
 * node agent SKUs' operation.
 * @member {object} [virtualMachineConfiguration.windowsConfiguration] This
 * property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates] If
 * omitted, the default value is true.
 * @member {number} [maxTasksPerNode] The maximum number of tasks that can run
 * concurrently on a single compute node in the pool. The default value is 1.
 * The maximum value of this setting depends on the size of the compute nodes
 * in the pool (the vmSize setting).
 * @member {object} [taskSchedulingPolicy] How tasks are distributed across
 * compute nodes in a pool.
 * @member {string} [taskSchedulingPolicy.nodeFillType] Possible values
 * include: 'spread', 'pack'
 * @member {moment.duration} [resizeTimeout] The timeout for allocation of
 * compute nodes to the pool. This timeout applies only to manual scaling; it
 * has no effect when enableAutoScale is set to true. The default value is 15
 * minutes. The minimum value is 5 minutes. If you specify a value less than 5
 * minutes, the Batch service rejects the request with an error; if you are
 * calling the REST API directly, the HTTP status code is 400 (Bad Request).
 * @member {number} [targetDedicatedNodes] The desired number of dedicated
 * compute nodes in the pool. This property must not be specified if
 * enableAutoScale is set to true. If enableAutoScale is set to false, then you
 * must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {number} [targetLowPriorityNodes] The desired number of low-priority
 * compute nodes in the pool. This property must not be specified if
 * enableAutoScale is set to true. If enableAutoScale is set to false, then you
 * must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {boolean} [enableAutoScale] Whether the pool size should
 * automatically adjust over time. If false, at least one of
 * targetDedicateNodes and targetLowPriorityNodes must be specified. If true,
 * the autoScaleFormula element is required. The pool automatically resizes
 * according to the formula. The default value is false.
 * @member {string} [autoScaleFormula] The formula for the desired number of
 * compute nodes in the pool. This property must not be specified if
 * enableAutoScale is set to false. It is required if enableAutoScale is set to
 * true. The formula is checked for validity before the pool is created. If the
 * formula is not valid, the Batch service rejects the request with detailed
 * error information.
 * @member {moment.duration} [autoScaleEvaluationInterval] The time interval at
 * which to automatically adjust the pool size according to the autoscale
 * formula. The default value is 15 minutes. The minimum and maximum value are
 * 5 minutes and 168 hours respectively. If you specify a value less than 5
 * minutes or greater than 168 hours, the Batch service rejects the request
 * with an invalid property value error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 * @member {boolean} [enableInterNodeCommunication] Whether the pool permits
 * direct communication between nodes. Enabling inter-node communication limits
 * the maximum size of the pool due to deployment restrictions on the nodes of
 * the pool. This may result in the pool not reaching its desired size. The
 * default value is false.
 * @member {object} [networkConfiguration] The network configuration for the
 * pool.
 * @member {string} [networkConfiguration.subnetId] The virtual network must be
 * in the same region and subscription as the Azure Batch account. The
 * specified subnet should have enough free IP addresses to accommodate the
 * number of nodes in the pool. If the subnet doesn't have enough free IP
 * addresses, the pool will partially allocate compute nodes, and a resize
 * error will occur. The 'MicrosoftAzureBatch' service principal must have the
 * 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role
 * for the specified VNet. The specified subnet must allow communication from
 * the Azure Batch service to be able to schedule tasks on the compute nodes.
 * This can be verified by checking if the specified VNet has any associated
 * Network Security Groups (NSG). If communication to the compute nodes in the
 * specified subnet is denied by an NSG, then the Batch service will set the
 * state of the compute nodes to unusable. For pools created via
 * virtualMachineConfiguration the Batch account must have poolAllocationMode
 * userSubscription in order to use a VNet. If the specified VNet has any
 * associated Network Security Groups (NSG), then a few reserved system ports
 * must be enabled for inbound communication. For pools created with a virtual
 * machine configuration, enable ports 29876 and 29877, as well as port 22 for
 * Linux and port 3389 for Windows. For pools created with a cloud service
 * configuration, enable ports 10100, 20100, and 30100. Also enable outbound
 * connections to Azure Storage on port 443. For more details see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object} [networkConfiguration.endpointConfiguration] Pool endpoint
 * configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array} [networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object} [startTask] A task to run on each compute node as it joins
 * the pool. The task runs when the node is added to the pool or when the node
 * is restarted.
 * @member {string} [startTask.commandLine] The command line does not run under
 * a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [startTask.resourceFiles] Files listed under this element
 * are located in the task's working directory.
 * @member {array} [startTask.environmentSettings]
 * @member {object} [startTask.userIdentity] If omitted, the task runs as a
 * non-administrative user unique to the task.
 * @member {string} [startTask.userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {object} [startTask.userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {string} [startTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [startTask.userIdentity.autoUser.elevationLevel] nonAdmin -
 * The auto user is a standard user without elevated access. admin - The auto
 * user is a user with elevated access and operates with full Administrator
 * permissions. The default value is nonAdmin. Possible values include:
 * 'nonAdmin', 'admin'
 * @member {number} [startTask.maxTaskRetryCount] The Batch service retries a
 * task if its exit code is nonzero. Note that this value specifically controls
 * the number of retries. The Batch service will try the task once, and may
 * then retry up to this limit. For example, if the maximum retry count is 3,
 * Batch tries the task up to 4 times (one initial try and 3 retries). If the
 * maximum retry count is 0, the Batch service does not retry the task. If the
 * maximum retry count is -1, the Batch service retries the task without limit.
 * @member {boolean} [startTask.waitForSuccess] If true and the start task
 * fails on a compute node, the Batch service retries the start task up to its
 * maximum retry count (maxTaskRetryCount). If the task has still not completed
 * successfully after all retries, then the Batch service marks the compute
 * node unusable, and will not schedule tasks to it. This condition can be
 * detected via the node state and failure info details. If false, the Batch
 * service will not wait for the start task to complete. In this case, other
 * tasks can start executing on the compute node while the start task is still
 * running; and even if the start task fails, new tasks will continue to be
 * scheduled on the node. The default is false.
 * @member {array} [certificateReferences] A list of certificates to be
 * installed on each compute node in the pool. For Windows compute nodes, the
 * Batch service installs the certificates to the specified certificate store
 * and location. For Linux compute nodes, the certificates are stored in a
 * directory inside the task working directory and an environment variable
 * AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this
 * location. For certificates with visibility of 'remoteUser', a 'certs'
 * directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array} [applicationPackageReferences] The list of application
 * packages to be installed on each compute node in the pool.
 * @member {array} [applicationLicenses] The list of application licenses the
 * Batch service will make available on each compute node in the pool. The list
 * of application licenses must be a subset of available Batch service
 * application licenses. If a license is requested which is not supported, pool
 * creation will fail.
 * @member {array} [userAccounts] The list of user accounts to be created on
 * each node in the pool.
 * @member {array} [metadata] A list of name-value pairs associated with the
 * pool as metadata. The Batch service does not assign any meaning to metadata;
 * it is solely for the use of user code.
 */
export interface PoolSpecification {
    displayName?: string;
    vmSize: string;
    cloudServiceConfiguration?: CloudServiceConfiguration;
    virtualMachineConfiguration?: VirtualMachineConfiguration;
    maxTasksPerNode?: number;
    taskSchedulingPolicy?: TaskSchedulingPolicy;
    resizeTimeout?: moment.Duration;
    targetDedicatedNodes?: number;
    targetLowPriorityNodes?: number;
    enableAutoScale?: boolean;
    autoScaleFormula?: string;
    autoScaleEvaluationInterval?: moment.Duration;
    enableInterNodeCommunication?: boolean;
    networkConfiguration?: NetworkConfiguration;
    startTask?: StartTask;
    certificateReferences?: CertificateReference[];
    applicationPackageReferences?: ApplicationPackageReference[];
    applicationLicenses?: string[];
    userAccounts?: UserAccount[];
    metadata?: MetadataItem[];
}
/**
 * @class
 * Initializes a new instance of the AutoPoolSpecification class.
 * @constructor
 * @summary Specifies characteristics for a temporary 'auto pool'. The Batch
 * service will create this auto pool when the job is submitted.
 *
 * @member {string} [autoPoolIdPrefix] A prefix to be added to the unique
 * identifier when a pool is automatically created. The Batch service assigns
 * each auto pool a unique identifier on creation. To distinguish between pools
 * created for different purposes, you can specify this element to add a prefix
 * to the ID that is assigned. The prefix can be up to 20 characters long.
 * @member {string} poolLifetimeOption The minimum lifetime of created auto
 * pools, and how multiple jobs on a schedule are assigned to pools. When the
 * pool lifetime is jobSchedule the pool exists for the lifetime of the job
 * schedule. The Batch Service creates the pool when it creates the first job
 * on the schedule. You may apply this option only to job schedules, not to
 * jobs. When the pool lifetime is job the pool exists for the lifetime of the
 * job to which it is dedicated. The Batch service creates the pool when it
 * creates the job. If the 'job' option is applied to a job schedule, the Batch
 * service creates a new auto pool for every job created on the schedule.
 * Possible values include: 'jobSchedule', 'job'
 * @member {boolean} [keepAlive] Whether to keep an auto pool alive after its
 * lifetime expires. If false, the Batch service deletes the pool once its
 * lifetime (as determined by the poolLifetimeOption setting) expires; that is,
 * when the job or job schedule completes. If true, the Batch service does not
 * delete the pool automatically. It is up to the user to delete auto pools
 * created with this option.
 * @member {object} [pool] The pool specification for the auto pool.
 * @member {string} [pool.displayName] The display name need not be unique and
 * can contain any Unicode characters up to a maximum length of 1024.
 * @member {string} [pool.vmSize] For information about available sizes of
 * virtual machines for Cloud Services pools (pools created with
 * cloudServiceConfiguration), see Sizes for Cloud Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object} [pool.cloudServiceConfiguration] This property must be
 * specified if the pool needs to be created with Azure PaaS VMs. This property
 * and virtualMachineConfiguration are mutually exclusive and one of the
 * properties must be specified. If neither is specified then the Batch service
 * returns an error; if you are calling the REST API directly, the HTTP status
 * code is 400 (Bad Request). This property cannot be specified if the Batch
 * account was created with its poolAllocationMode property set to
 * 'UserSubscription'.
 * @member {string} [pool.cloudServiceConfiguration.osFamily] Possible values
 * are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS
 * Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to
 * Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016.
 * For more information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string} [pool.cloudServiceConfiguration.targetOSVersion] The
 * default value is * which specifies the latest operating system version for
 * the specified OS family.
 * @member {string} [pool.cloudServiceConfiguration.currentOSVersion] This may
 * differ from targetOSVersion if the pool state is Upgrading. In this case
 * some virtual machines may be on the targetOSVersion and some may be on the
 * currentOSVersion during the upgrade process. Once all virtual machines have
 * upgraded, currentOSVersion is updated to be the same as targetOSVersion.
 * @member {object} [pool.virtualMachineConfiguration] This property must be
 * specified if the pool needs to be created with Azure IaaS VMs. This property
 * and cloudServiceConfiguration are mutually exclusive and one of the
 * properties must be specified. If neither is specified then the Batch service
 * returns an error; if you are calling the REST API directly, the HTTP status
 * code is 400 (Bad Request).
 * @member {object} [pool.virtualMachineConfiguration.imageReference] This
 * property and osDisk are mutually exclusive and one of the properties must be
 * specified.
 * @member {string} [pool.virtualMachineConfiguration.imageReference.publisher]
 * For example, Canonical or MicrosoftWindowsServer.
 * @member {string} [pool.virtualMachineConfiguration.imageReference.offer] For
 * example, UbuntuServer or WindowsServer.
 * @member {string} [pool.virtualMachineConfiguration.imageReference.sku] For
 * example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string} [pool.virtualMachineConfiguration.imageReference.version] A
 * value of 'latest' can be specified to select the latest version of an image.
 * If omitted, the default is 'latest'.
 * @member {object} [pool.virtualMachineConfiguration.osDisk] This property can
 * be specified only if the Batch account was created with its
 * poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 * @member {array} [pool.virtualMachineConfiguration.osDisk.imageUris] All the
 * VHDs must be identical and must reside in an Azure Storage account within
 * the same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string} [pool.virtualMachineConfiguration.osDisk.caching] Values
 * are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string} [pool.virtualMachineConfiguration.nodeAgentSKUId] The Batch
 * node agent is a program that runs on each node in the pool, and provides the
 * command-and-control interface between the node and the Batch service. There
 * are different implementations of the node agent, known as SKUs, for
 * different operating systems. You must specify a node agent SKU which matches
 * the selected image reference. To get the list of supported node agent SKUs
 * along with their list of verified image references, see the 'List supported
 * node agent SKUs' operation.
 * @member {object} [pool.virtualMachineConfiguration.windowsConfiguration]
 * This property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * If omitted, the default value is true.
 * @member {number} [pool.maxTasksPerNode] The default value is 1. The maximum
 * value of this setting depends on the size of the compute nodes in the pool
 * (the vmSize setting).
 * @member {object} [pool.taskSchedulingPolicy]
 * @member {string} [pool.taskSchedulingPolicy.nodeFillType] Possible values
 * include: 'spread', 'pack'
 * @member {moment.duration} [pool.resizeTimeout] This timeout applies only to
 * manual scaling; it has no effect when enableAutoScale is set to true. The
 * default value is 15 minutes. The minimum value is 5 minutes. If you specify
 * a value less than 5 minutes, the Batch service rejects the request with an
 * error; if you are calling the REST API directly, the HTTP status code is 400
 * (Bad Request).
 * @member {number} [pool.targetDedicatedNodes] This property must not be
 * specified if enableAutoScale is set to true. If enableAutoScale is set to
 * false, then you must set either targetDedicatedNodes,
 * targetLowPriorityNodes, or both.
 * @member {number} [pool.targetLowPriorityNodes] This property must not be
 * specified if enableAutoScale is set to true. If enableAutoScale is set to
 * false, then you must set either targetDedicatedNodes,
 * targetLowPriorityNodes, or both.
 * @member {boolean} [pool.enableAutoScale] If false, at least one of
 * targetDedicateNodes and targetLowPriorityNodes must be specified. If true,
 * the autoScaleFormula element is required. The pool automatically resizes
 * according to the formula. The default value is false.
 * @member {string} [pool.autoScaleFormula] This property must not be specified
 * if enableAutoScale is set to false. It is required if enableAutoScale is set
 * to true. The formula is checked for validity before the pool is created. If
 * the formula is not valid, the Batch service rejects the request with
 * detailed error information.
 * @member {moment.duration} [pool.autoScaleEvaluationInterval] The default
 * value is 15 minutes. The minimum and maximum value are 5 minutes and 168
 * hours respectively. If you specify a value less than 5 minutes or greater
 * than 168 hours, the Batch service rejects the request with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request).
 * @member {boolean} [pool.enableInterNodeCommunication] Enabling inter-node
 * communication limits the maximum size of the pool due to deployment
 * restrictions on the nodes of the pool. This may result in the pool not
 * reaching its desired size. The default value is false.
 * @member {object} [pool.networkConfiguration]
 * @member {string} [pool.networkConfiguration.subnetId] The virtual network
 * must be in the same region and subscription as the Azure Batch account. The
 * specified subnet should have enough free IP addresses to accommodate the
 * number of nodes in the pool. If the subnet doesn't have enough free IP
 * addresses, the pool will partially allocate compute nodes, and a resize
 * error will occur. The 'MicrosoftAzureBatch' service principal must have the
 * 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role
 * for the specified VNet. The specified subnet must allow communication from
 * the Azure Batch service to be able to schedule tasks on the compute nodes.
 * This can be verified by checking if the specified VNet has any associated
 * Network Security Groups (NSG). If communication to the compute nodes in the
 * specified subnet is denied by an NSG, then the Batch service will set the
 * state of the compute nodes to unusable. For pools created via
 * virtualMachineConfiguration the Batch account must have poolAllocationMode
 * userSubscription in order to use a VNet. If the specified VNet has any
 * associated Network Security Groups (NSG), then a few reserved system ports
 * must be enabled for inbound communication. For pools created with a virtual
 * machine configuration, enable ports 29876 and 29877, as well as port 22 for
 * Linux and port 3389 for Windows. For pools created with a cloud service
 * configuration, enable ports 10100, 20100, and 30100. Also enable outbound
 * connections to Azure Storage on port 443. For more details see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object} [pool.networkConfiguration.endpointConfiguration] Pool
 * endpoint configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array}
 * [pool.networkConfiguration.endpointConfiguration.inboundNATPools] The
 * maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object} [pool.startTask]
 * @member {string} [pool.startTask.commandLine] The command line does not run
 * under a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [pool.startTask.resourceFiles] Files listed under this
 * element are located in the task's working directory.
 * @member {array} [pool.startTask.environmentSettings]
 * @member {object} [pool.startTask.userIdentity] If omitted, the task runs as
 * a non-administrative user unique to the task.
 * @member {string} [pool.startTask.userIdentity.userName] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {object} [pool.startTask.userIdentity.autoUser] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {string} [pool.startTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [pool.startTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {number} [pool.startTask.maxTaskRetryCount] The Batch service
 * retries a task if its exit code is nonzero. Note that this value
 * specifically controls the number of retries. The Batch service will try the
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * the task. If the maximum retry count is -1, the Batch service retries the
 * task without limit.
 * @member {boolean} [pool.startTask.waitForSuccess] If true and the start task
 * fails on a compute node, the Batch service retries the start task up to its
 * maximum retry count (maxTaskRetryCount). If the task has still not completed
 * successfully after all retries, then the Batch service marks the compute
 * node unusable, and will not schedule tasks to it. This condition can be
 * detected via the node state and failure info details. If false, the Batch
 * service will not wait for the start task to complete. In this case, other
 * tasks can start executing on the compute node while the start task is still
 * running; and even if the start task fails, new tasks will continue to be
 * scheduled on the node. The default is false.
 * @member {array} [pool.certificateReferences] For Windows compute nodes, the
 * Batch service installs the certificates to the specified certificate store
 * and location. For Linux compute nodes, the certificates are stored in a
 * directory inside the task working directory and an environment variable
 * AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this
 * location. For certificates with visibility of 'remoteUser', a 'certs'
 * directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array} [pool.applicationPackageReferences]
 * @member {array} [pool.applicationLicenses] The list of application licenses
 * must be a subset of available Batch service application licenses. If a
 * license is requested which is not supported, pool creation will fail.
 * @member {array} [pool.userAccounts]
 * @member {array} [pool.metadata] The Batch service does not assign any
 * meaning to metadata; it is solely for the use of user code.
 */
export interface AutoPoolSpecification {
    autoPoolIdPrefix?: string;
    poolLifetimeOption: string;
    keepAlive?: boolean;
    pool?: PoolSpecification;
}
/**
 * @class
 * Initializes a new instance of the PoolInformation class.
 * @constructor
 * @summary Specifies how a job should be assigned to a pool.
 *
 * @member {string} [poolId] The ID of an existing pool. All the tasks of the
 * job will run on the specified pool. You must ensure that the pool referenced
 * by this property exists. If the pool does not exist at the time the Batch
 * service tries to schedule a job, no tasks for the job will run until you
 * create a pool with that id. Note that the Batch service will not reject the
 * job request; it will simply not run tasks until the pool exists. You must
 * specify either the pool ID or the auto pool specification, but not both.
 * @member {object} [autoPoolSpecification] Characteristics for a temporary
 * 'auto pool'. The Batch service will create this auto pool when the job is
 * submitted. If auto pool creation fails, the Batch service moves the job to a
 * completed state, and the pool creation error is set in the job's scheduling
 * error property. The Batch service manages the lifetime (both creation and,
 * unless keepAlive is specified, deletion) of the auto pool. Any user actions
 * that affect the lifetime of the auto pool while the job is active will
 * result in unexpected behavior. You must specify either the pool ID or the
 * auto pool specification, but not both.
 * @member {string} [autoPoolSpecification.autoPoolIdPrefix] The Batch service
 * assigns each auto pool a unique identifier on creation. To distinguish
 * between pools created for different purposes, you can specify this element
 * to add a prefix to the ID that is assigned. The prefix can be up to 20
 * characters long.
 * @member {string} [autoPoolSpecification.poolLifetimeOption] When the pool
 * lifetime is jobSchedule the pool exists for the lifetime of the job
 * schedule. The Batch Service creates the pool when it creates the first job
 * on the schedule. You may apply this option only to job schedules, not to
 * jobs. When the pool lifetime is job the pool exists for the lifetime of the
 * job to which it is dedicated. The Batch service creates the pool when it
 * creates the job. If the 'job' option is applied to a job schedule, the Batch
 * service creates a new auto pool for every job created on the schedule.
 * Possible values include: 'jobSchedule', 'job'
 * @member {boolean} [autoPoolSpecification.keepAlive] If false, the Batch
 * service deletes the pool once its lifetime (as determined by the
 * poolLifetimeOption setting) expires; that is, when the job or job schedule
 * completes. If true, the Batch service does not delete the pool
 * automatically. It is up to the user to delete auto pools created with this
 * option.
 * @member {object} [autoPoolSpecification.pool]
 * @member {string} [autoPoolSpecification.pool.displayName] The display name
 * need not be unique and can contain any Unicode characters up to a maximum
 * length of 1024.
 * @member {string} [autoPoolSpecification.pool.vmSize] For information about
 * available sizes of virtual machines for Cloud Services pools (pools created
 * with cloudServiceConfiguration), see Sizes for Cloud Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object} [autoPoolSpecification.pool.cloudServiceConfiguration] This
 * property must be specified if the pool needs to be created with Azure PaaS
 * VMs. This property and virtualMachineConfiguration are mutually exclusive
 * and one of the properties must be specified. If neither is specified then
 * the Batch service returns an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request). This property cannot be
 * specified if the Batch account was created with its poolAllocationMode
 * property set to 'UserSubscription'.
 * @member {string}
 * [autoPoolSpecification.pool.cloudServiceConfiguration.osFamily] Possible
 * values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 -
 * OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent
 * to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server
 * 2016. For more information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string}
 * [autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion] The
 * default value is * which specifies the latest operating system version for
 * the specified OS family.
 * @member {string}
 * [autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion] This
 * may differ from targetOSVersion if the pool state is Upgrading. In this case
 * some virtual machines may be on the targetOSVersion and some may be on the
 * currentOSVersion during the upgrade process. Once all virtual machines have
 * upgraded, currentOSVersion is updated to be the same as targetOSVersion.
 * @member {object} [autoPoolSpecification.pool.virtualMachineConfiguration]
 * This property must be specified if the pool needs to be created with Azure
 * IaaS VMs. This property and cloudServiceConfiguration are mutually exclusive
 * and one of the properties must be specified. If neither is specified then
 * the Batch service returns an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 * @member {object}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.imageReference] This
 * property and osDisk are mutually exclusive and one of the properties must be
 * specified.
 * @member {string}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
 * For example, Canonical or MicrosoftWindowsServer.
 * @member {string}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
 * For example, UbuntuServer or WindowsServer.
 * @member {string}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
 * For example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
 * A value of 'latest' can be specified to select the latest version of an
 * image. If omitted, the default is 'latest'.
 * @member {object}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.osDisk] This
 * property can be specified only if the Batch account was created with its
 * poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 * @member {array}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris]
 * All the VHDs must be identical and must reside in an Azure Storage account
 * within the same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
 * Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId] The
 * Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems. You must specify a node agent SKU
 * which matches the selected image reference. To get the list of supported
 * node agent SKUs along with their list of verified image references, see the
 * 'List supported node agent SKUs' operation.
 * @member {object}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
 * This property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * If omitted, the default value is true.
 * @member {number} [autoPoolSpecification.pool.maxTasksPerNode] The default
 * value is 1. The maximum value of this setting depends on the size of the
 * compute nodes in the pool (the vmSize setting).
 * @member {object} [autoPoolSpecification.pool.taskSchedulingPolicy]
 * @member {string}
 * [autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType] Possible
 * values include: 'spread', 'pack'
 * @member {moment.duration} [autoPoolSpecification.pool.resizeTimeout] This
 * timeout applies only to manual scaling; it has no effect when
 * enableAutoScale is set to true. The default value is 15 minutes. The minimum
 * value is 5 minutes. If you specify a value less than 5 minutes, the Batch
 * service rejects the request with an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 * @member {number} [autoPoolSpecification.pool.targetDedicatedNodes] This
 * property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {number} [autoPoolSpecification.pool.targetLowPriorityNodes] This
 * property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {boolean} [autoPoolSpecification.pool.enableAutoScale] If false, at
 * least one of targetDedicateNodes and targetLowPriorityNodes must be
 * specified. If true, the autoScaleFormula element is required. The pool
 * automatically resizes according to the formula. The default value is false.
 * @member {string} [autoPoolSpecification.pool.autoScaleFormula] This property
 * must not be specified if enableAutoScale is set to false. It is required if
 * enableAutoScale is set to true. The formula is checked for validity before
 * the pool is created. If the formula is not valid, the Batch service rejects
 * the request with detailed error information.
 * @member {moment.duration}
 * [autoPoolSpecification.pool.autoScaleEvaluationInterval] The default value
 * is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours
 * respectively. If you specify a value less than 5 minutes or greater than 168
 * hours, the Batch service rejects the request with an invalid property value
 * error; if you are calling the REST API directly, the HTTP status code is 400
 * (Bad Request).
 * @member {boolean} [autoPoolSpecification.pool.enableInterNodeCommunication]
 * Enabling inter-node communication limits the maximum size of the pool due to
 * deployment restrictions on the nodes of the pool. This may result in the
 * pool not reaching its desired size. The default value is false.
 * @member {object} [autoPoolSpecification.pool.networkConfiguration]
 * @member {string} [autoPoolSpecification.pool.networkConfiguration.subnetId]
 * The virtual network must be in the same region and subscription as the Azure
 * Batch account. The specified subnet should have enough free IP addresses to
 * accommodate the number of nodes in the pool. If the subnet doesn't have
 * enough free IP addresses, the pool will partially allocate compute nodes,
 * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
 * must have the 'Classic Virtual Machine Contributor' Role-Based Access
 * Control (RBAC) role for the specified VNet. The specified subnet must allow
 * communication from the Azure Batch service to be able to schedule tasks on
 * the compute nodes. This can be verified by checking if the specified VNet
 * has any associated Network Security Groups (NSG). If communication to the
 * compute nodes in the specified subnet is denied by an NSG, then the Batch
 * service will set the state of the compute nodes to unusable. For pools
 * created via virtualMachineConfiguration the Batch account must have
 * poolAllocationMode userSubscription in order to use a VNet. If the specified
 * VNet has any associated Network Security Groups (NSG), then a few reserved
 * system ports must be enabled for inbound communication. For pools created
 * with a virtual machine configuration, enable ports 29876 and 29877, as well
 * as port 22 for Linux and port 3389 for Windows. For pools created with a
 * cloud service configuration, enable ports 10100, 20100, and 30100. Also
 * enable outbound connections to Azure Storage on port 443. For more details
 * see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object}
 * [autoPoolSpecification.pool.networkConfiguration.endpointConfiguration] Pool
 * endpoint configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array}
 * [autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object} [autoPoolSpecification.pool.startTask]
 * @member {string} [autoPoolSpecification.pool.startTask.commandLine] The
 * command line does not run under a shell, and therefore cannot take advantage
 * of shell features such as environment variable expansion. If you want to
 * take advantage of such features, you should invoke the shell in the command
 * line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array} [autoPoolSpecification.pool.startTask.resourceFiles] Files
 * listed under this element are located in the task's working directory.
 * @member {array} [autoPoolSpecification.pool.startTask.environmentSettings]
 * @member {object} [autoPoolSpecification.pool.startTask.userIdentity] If
 * omitted, the task runs as a non-administrative user unique to the task.
 * @member {string}
 * [autoPoolSpecification.pool.startTask.userIdentity.userName] The userName
 * and autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {object}
 * [autoPoolSpecification.pool.startTask.userIdentity.autoUser] The userName
 * and autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {string}
 * [autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope] Values
 * are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {number} [autoPoolSpecification.pool.startTask.maxTaskRetryCount]
 * The Batch service retries a task if its exit code is nonzero. Note that this
 * value specifically controls the number of retries. The Batch service will
 * try the task once, and may then retry up to this limit. For example, if the
 * maximum retry count is 3, Batch tries the task up to 4 times (one initial
 * try and 3 retries). If the maximum retry count is 0, the Batch service does
 * not retry the task. If the maximum retry count is -1, the Batch service
 * retries the task without limit.
 * @member {boolean} [autoPoolSpecification.pool.startTask.waitForSuccess] If
 * true and the start task fails on a compute node, the Batch service retries
 * the start task up to its maximum retry count (maxTaskRetryCount). If the
 * task has still not completed successfully after all retries, then the Batch
 * service marks the compute node unusable, and will not schedule tasks to it.
 * This condition can be detected via the node state and failure info details.
 * If false, the Batch service will not wait for the start task to complete. In
 * this case, other tasks can start executing on the compute node while the
 * start task is still running; and even if the start task fails, new tasks
 * will continue to be scheduled on the node. The default is false.
 * @member {array} [autoPoolSpecification.pool.certificateReferences] For
 * Windows compute nodes, the Batch service installs the certificates to the
 * specified certificate store and location. For Linux compute nodes, the
 * certificates are stored in a directory inside the task working directory and
 * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
 * query for this location. For certificates with visibility of 'remoteUser', a
 * 'certs' directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array} [autoPoolSpecification.pool.applicationPackageReferences]
 * @member {array} [autoPoolSpecification.pool.applicationLicenses] The list of
 * application licenses must be a subset of available Batch service application
 * licenses. If a license is requested which is not supported, pool creation
 * will fail.
 * @member {array} [autoPoolSpecification.pool.userAccounts]
 * @member {array} [autoPoolSpecification.pool.metadata] The Batch service does
 * not assign any meaning to metadata; it is solely for the use of user code.
 */
export interface PoolInformation {
    poolId?: string;
    autoPoolSpecification?: AutoPoolSpecification;
}
/**
 * @class
 * Initializes a new instance of the JobSpecification class.
 * @constructor
 * @summary Specifies details of the jobs to be created on a schedule.
 *
 * @member {number} [priority] The priority of jobs created under this
 * schedule. Priority values can range from -1000 to 1000, with -1000 being the
 * lowest priority and 1000 being the highest priority. The default value is 0.
 * This priority is used as the default for all jobs under the job schedule.
 * You can update a job's priority after it has been created using by using the
 * update job API.
 * @member {string} [displayName] The display name for jobs created under this
 * schedule. The name need not be unique and can contain any Unicode characters
 * up to a maximum length of 1024.
 * @member {boolean} [usesTaskDependencies] Whether tasks in the job can define
 * dependencies on each other. The default is false.
 * @member {string} [onAllTasksComplete] The action the Batch service should
 * take when all tasks in a job created under this schedule are in the
 * completed state. Note that if a job contains no tasks, then all tasks are
 * considered complete. This option is therefore most commonly used with a Job
 * Manager task; if you want to use automatic job termination without a Job
 * Manager, you should initially set onAllTasksComplete to noAction and update
 * the job properties to set onAllTasksComplete to terminateJob once you have
 * finished adding tasks. The default is noAction. Possible values include:
 * 'noAction', 'terminateJob'
 * @member {string} [onTaskFailure] The action the Batch service should take
 * when any task fails in a job created under this schedule. A task is
 * considered to have failed if it have failed if has a failureInfo. A
 * failureInfo is set if the task completes with a non-zero exit code after
 * exhausting its retry count, or if there was an error starting the task, for
 * example due to a resource file download error. The default is noAction.
 * Possible values include: 'noAction', 'performExitOptionsJobAction'
 * @member {object} [constraints] The execution constraints for jobs created
 * under this schedule.
 * @member {moment.duration} [constraints.maxWallClockTime] If the job does not
 * complete within the time limit, the Batch service terminates it and any
 * tasks that are still running. In this case, the termination reason will be
 * MaxWallClockTimeExpiry. If this property is not specified, there is no time
 * limit on how long the job may run.
 * @member {number} [constraints.maxTaskRetryCount] Note that this value
 * specifically controls the number of retries. The Batch service will try each
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries a task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * tasks. If the maximum retry count is -1, the Batch service retries tasks
 * without limit. The default value is 0 (no retries).
 * @member {object} [jobManagerTask] The details of a Job Manager task to be
 * launched when a job is started under this schedule. If the job does not
 * specify a Job Manager task, the user must explicitly add tasks to the job
 * using the Task API. If the job does specify a Job Manager task, the Batch
 * service creates the Job Manager task when the job is created, and will try
 * to schedule the Job Manager task before scheduling other tasks in the job.
 * @member {string} [jobManagerTask.id] The ID can contain any combination of
 * alphanumeric characters including hyphens and underscores and cannot contain
 * more than 64 characters.
 * @member {string} [jobManagerTask.displayName] It need not be unique and can
 * contain any Unicode characters up to a maximum length of 1024.
 * @member {string} [jobManagerTask.commandLine] The command line does not run
 * under a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [jobManagerTask.resourceFiles] Files listed under this
 * element are located in the task's working directory.
 * @member {array} [jobManagerTask.outputFiles] For multi-instance tasks, the
 * files will only be uploaded from the compute node on which the primary task
 * is executed.
 * @member {array} [jobManagerTask.environmentSettings]
 * @member {object} [jobManagerTask.constraints]
 * @member {moment.duration} [jobManagerTask.constraints.maxWallClockTime] If
 * this is not specified, there is no time limit on how long the task may run.
 * @member {moment.duration} [jobManagerTask.constraints.retentionTime] The
 * default is infinite, i.e. the task directory will be retained until the
 * compute node is removed or reimaged.
 * @member {number} [jobManagerTask.constraints.maxTaskRetryCount] Note that
 * this value specifically controls the number of retries. The Batch service
 * will try the task once, and may then retry up to this limit. For example, if
 * the maximum retry count is 3, Batch tries the task up to 4 times (one
 * initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobManagerTask.killJobOnCompletion] If true, when the Job
 * Manager task completes, the Batch service marks the job as complete. If any
 * tasks are still running at this time (other than Job Release), those tasks
 * are terminated. If false, the completion of the Job Manager task does not
 * affect the job status. In this case, you should either use the
 * onAllTasksComplete attribute to terminate the job, or have a client or user
 * terminate the job explicitly. An example of this is if the Job Manager
 * creates a set of tasks but then takes no further role in their execution.
 * The default value is true. If you are using the onAllTasksComplete and
 * onTaskFailure attributes to control job lifetime, and using the Job Manager
 * task only to create the tasks for the job (not to monitor progress), then it
 * is important to set killJobOnCompletion to false.
 * @member {object} [jobManagerTask.userIdentity] If omitted, the task runs as
 * a non-administrative user unique to the task.
 * @member {string} [jobManagerTask.userIdentity.userName] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {object} [jobManagerTask.userIdentity.autoUser] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {string} [jobManagerTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [jobManagerTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean} [jobManagerTask.runExclusive] If true, no other tasks will
 * run on the same compute node for as long as the Job Manager is running. If
 * false, other tasks can run simultaneously with the Job Manager on a compute
 * node. The Job Manager task counts normally against the node's concurrent
 * task limit, so this is only relevant if the node allows multiple concurrent
 * tasks. The default value is true.
 * @member {array} [jobManagerTask.applicationPackageReferences] Application
 * packages are downloaded and deployed to a shared directory, not the task
 * working directory. Therefore, if a referenced package is already on the
 * compute node, and is up to date, then it is not re-downloaded; the existing
 * copy on the compute node is used. If a referenced application package cannot
 * be installed, for example because the package has been deleted or because
 * download failed, the task fails.
 * @member {object} [jobManagerTask.authenticationTokenSettings] If this
 * property is set, the Batch service provides the task with an authentication
 * token which can be used to authenticate Batch service operations without
 * requiring an account access key. The token is provided via the
 * AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations that the
 * task can carry out using the token depend on the settings. For example, a
 * task can request job permissions in order to add other tasks to the job, or
 * check the status of the job or of other tasks under the job.
 * @member {array} [jobManagerTask.authenticationTokenSettings.access] The
 * authentication token grants access to a limited set of Batch service
 * operations. Currently the only supported value for the access property is
 * 'job', which grants access to all operations related to the job which
 * contains the task.
 * @member {boolean} [jobManagerTask.allowLowPriorityNode] The default value is
 * false.
 * @member {object} [jobPreparationTask] The Job Preparation task for jobs
 * created under this schedule. If a job has a Job Preparation task, the Batch
 * service will run the Job Preparation task on a compute node before starting
 * any tasks of that job on that compute node.
 * @member {string} [jobPreparationTask.id] The ID can contain any combination
 * of alphanumeric characters including hyphens and underscores and cannot
 * contain more than 64 characters. If you do not specify this property, the
 * Batch service assigns a default value of 'jobpreparation'. No other task in
 * the job can have the same ID as the Job Preparation task. If you try to
 * submit a task with the same id, the Batch service rejects the request with
 * error code TaskIdSameAsJobPreparationTask; if you are calling the REST API
 * directly, the HTTP status code is 409 (Conflict).
 * @member {string} [jobPreparationTask.commandLine] The command line does not
 * run under a shell, and therefore cannot take advantage of shell features
 * such as environment variable expansion. If you want to take advantage of
 * such features, you should invoke the shell in the command line, for example
 * using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [jobPreparationTask.resourceFiles] Files listed under this
 * element are located in the task's working directory.
 * @member {array} [jobPreparationTask.environmentSettings]
 * @member {object} [jobPreparationTask.constraints]
 * @member {moment.duration} [jobPreparationTask.constraints.maxWallClockTime]
 * If this is not specified, there is no time limit on how long the task may
 * run.
 * @member {moment.duration} [jobPreparationTask.constraints.retentionTime] The
 * default is infinite, i.e. the task directory will be retained until the
 * compute node is removed or reimaged.
 * @member {number} [jobPreparationTask.constraints.maxTaskRetryCount] Note
 * that this value specifically controls the number of retries. The Batch
 * service will try the task once, and may then retry up to this limit. For
 * example, if the maximum retry count is 3, Batch tries the task up to 4 times
 * (one initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobPreparationTask.waitForSuccess] If true and the Job
 * Preparation task fails on a compute node, the Batch service retries the Job
 * Preparation task up to its maximum retry count (as specified in the
 * constraints element). If the task has still not completed successfully after
 * all retries, then the Batch service will not schedule tasks of the job to
 * the compute node. The compute node remains active and eligible to run tasks
 * of other jobs. If false, the Batch service will not wait for the Job
 * Preparation task to complete. In this case, other tasks of the job can start
 * executing on the compute node while the Job Preparation task is still
 * running; and even if the Job Preparation task fails, new tasks will continue
 * to be scheduled on the node. The default value is true.
 * @member {object} [jobPreparationTask.userIdentity] If omitted, the task runs
 * as a non-administrative user unique to the task on Windows nodes, or a a
 * non-administrative user unique to the pool on Linux nodes.
 * @member {string} [jobPreparationTask.userIdentity.userName] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {object} [jobPreparationTask.userIdentity.autoUser] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {string} [jobPreparationTask.userIdentity.autoUser.scope] Values
 * are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [jobPreparationTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean} [jobPreparationTask.rerunOnNodeRebootAfterSuccess] The Job
 * Preparation task is always rerun if a compute node is reimaged, or if the
 * Job Preparation task did not complete (e.g. because the reboot occurred
 * while the task was running). Therefore, you should always write a Job
 * Preparation task to be idempotent and to behave correctly if run multiple
 * times. The default value is true.
 * @member {object} [jobReleaseTask] The Job Release task for jobs created
 * under this schedule. The primary purpose of the Job Release task is to undo
 * changes to compute nodes made by the Job Preparation task. Example
 * activities include deleting local files, or shutting down services that were
 * started as part of job preparation. A Job Release task cannot be specified
 * without also specifying a Job Preparation task for the job. The Batch
 * service runs the Job Release task on the compute nodes that have run the Job
 * Preparation task.
 * @member {string} [jobReleaseTask.id] The ID can contain any combination of
 * alphanumeric characters including hyphens and underscores and cannot contain
 * more than 64 characters. If you do not specify this property, the Batch
 * service assigns a default value of 'jobrelease'. No other task in the job
 * can have the same ID as the Job Release task. If you try to submit a task
 * with the same id, the Batch service rejects the request with error code
 * TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the
 * HTTP status code is 409 (Conflict).
 * @member {string} [jobReleaseTask.commandLine] The command line does not run
 * under a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [jobReleaseTask.resourceFiles] Files listed under this
 * element are located in the task's working directory.
 * @member {array} [jobReleaseTask.environmentSettings]
 * @member {moment.duration} [jobReleaseTask.maxWallClockTime]
 * @member {moment.duration} [jobReleaseTask.retentionTime] The default is
 * infinite, i.e. the task directory will be retained until the compute node is
 * removed or reimaged.
 * @member {object} [jobReleaseTask.userIdentity] If omitted, the task runs as
 * a non-administrative user unique to the task.
 * @member {string} [jobReleaseTask.userIdentity.userName] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {object} [jobReleaseTask.userIdentity.autoUser] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {string} [jobReleaseTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [jobReleaseTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {array} [commonEnvironmentSettings] A list of common environment
 * variable settings. These environment variables are set for all tasks in jobs
 * created under this schedule (including the Job Manager, Job Preparation and
 * Job Release tasks). Individual tasks can override an environment setting
 * specified here by specifying the same setting name with a different value.
 * @member {object} poolInfo The pool on which the Batch service runs the tasks
 * of jobs created under this schedule.
 * @member {string} [poolInfo.poolId] You must ensure that the pool referenced
 * by this property exists. If the pool does not exist at the time the Batch
 * service tries to schedule a job, no tasks for the job will run until you
 * create a pool with that id. Note that the Batch service will not reject the
 * job request; it will simply not run tasks until the pool exists. You must
 * specify either the pool ID or the auto pool specification, but not both.
 * @member {object} [poolInfo.autoPoolSpecification] If auto pool creation
 * fails, the Batch service moves the job to a completed state, and the pool
 * creation error is set in the job's scheduling error property. The Batch
 * service manages the lifetime (both creation and, unless keepAlive is
 * specified, deletion) of the auto pool. Any user actions that affect the
 * lifetime of the auto pool while the job is active will result in unexpected
 * behavior. You must specify either the pool ID or the auto pool
 * specification, but not both.
 * @member {string} [poolInfo.autoPoolSpecification.autoPoolIdPrefix] The Batch
 * service assigns each auto pool a unique identifier on creation. To
 * distinguish between pools created for different purposes, you can specify
 * this element to add a prefix to the ID that is assigned. The prefix can be
 * up to 20 characters long.
 * @member {string} [poolInfo.autoPoolSpecification.poolLifetimeOption] When
 * the pool lifetime is jobSchedule the pool exists for the lifetime of the job
 * schedule. The Batch Service creates the pool when it creates the first job
 * on the schedule. You may apply this option only to job schedules, not to
 * jobs. When the pool lifetime is job the pool exists for the lifetime of the
 * job to which it is dedicated. The Batch service creates the pool when it
 * creates the job. If the 'job' option is applied to a job schedule, the Batch
 * service creates a new auto pool for every job created on the schedule.
 * Possible values include: 'jobSchedule', 'job'
 * @member {boolean} [poolInfo.autoPoolSpecification.keepAlive] If false, the
 * Batch service deletes the pool once its lifetime (as determined by the
 * poolLifetimeOption setting) expires; that is, when the job or job schedule
 * completes. If true, the Batch service does not delete the pool
 * automatically. It is up to the user to delete auto pools created with this
 * option.
 * @member {object} [poolInfo.autoPoolSpecification.pool]
 * @member {string} [poolInfo.autoPoolSpecification.pool.displayName] The
 * display name need not be unique and can contain any Unicode characters up to
 * a maximum length of 1024.
 * @member {string} [poolInfo.autoPoolSpecification.pool.vmSize] For
 * information about available sizes of virtual machines for Cloud Services
 * pools (pools created with cloudServiceConfiguration), see Sizes for Cloud
 * Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration] This
 * property must be specified if the pool needs to be created with Azure PaaS
 * VMs. This property and virtualMachineConfiguration are mutually exclusive
 * and one of the properties must be specified. If neither is specified then
 * the Batch service returns an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request). This property cannot be
 * specified if the Batch account was created with its poolAllocationMode
 * property set to 'UserSubscription'.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily]
 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2
 * SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4,
 * equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows
 * Server 2016. For more information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
 * The default value is * which specifies the latest operating system version
 * for the specified OS family.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
 * This may differ from targetOSVersion if the pool state is Upgrading. In this
 * case some virtual machines may be on the targetOSVersion and some may be on
 * the currentOSVersion during the upgrade process. Once all virtual machines
 * have upgraded, currentOSVersion is updated to be the same as
 * targetOSVersion.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration] This
 * property must be specified if the pool needs to be created with Azure IaaS
 * VMs. This property and cloudServiceConfiguration are mutually exclusive and
 * one of the properties must be specified. If neither is specified then the
 * Batch service returns an error; if you are calling the REST API directly,
 * the HTTP status code is 400 (Bad Request).
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
 * This property and osDisk are mutually exclusive and one of the properties
 * must be specified.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
 * For example, Canonical or MicrosoftWindowsServer.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
 * For example, UbuntuServer or WindowsServer.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
 * For example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
 * A value of 'latest' can be specified to select the latest version of an
 * image. If omitted, the default is 'latest'.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
 * This property can be specified only if the Batch account was created with
 * its poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris]
 * All the VHDs must be identical and must reside in an Azure Storage account
 * within the same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
 * Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId]
 * The Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems. You must specify a node agent SKU
 * which matches the selected image reference. To get the list of supported
 * node agent SKUs along with their list of verified image references, see the
 * 'List supported node agent SKUs' operation.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
 * This property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * If omitted, the default value is true.
 * @member {number} [poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
 * default value is 1. The maximum value of this setting depends on the size of
 * the compute nodes in the pool (the vmSize setting).
 * @member {object} [poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType]
 * Possible values include: 'spread', 'pack'
 * @member {moment.duration}
 * [poolInfo.autoPoolSpecification.pool.resizeTimeout] This timeout applies
 * only to manual scaling; it has no effect when enableAutoScale is set to
 * true. The default value is 15 minutes. The minimum value is 5 minutes. If
 * you specify a value less than 5 minutes, the Batch service rejects the
 * request with an error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request).
 * @member {number} [poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {number}
 * [poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes] This property
 * must not be specified if enableAutoScale is set to true. If enableAutoScale
 * is set to false, then you must set either targetDedicatedNodes,
 * targetLowPriorityNodes, or both.
 * @member {boolean} [poolInfo.autoPoolSpecification.pool.enableAutoScale] If
 * false, at least one of targetDedicateNodes and targetLowPriorityNodes must
 * be specified. If true, the autoScaleFormula element is required. The pool
 * automatically resizes according to the formula. The default value is false.
 * @member {string} [poolInfo.autoPoolSpecification.pool.autoScaleFormula] This
 * property must not be specified if enableAutoScale is set to false. It is
 * required if enableAutoScale is set to true. The formula is checked for
 * validity before the pool is created. If the formula is not valid, the Batch
 * service rejects the request with detailed error information.
 * @member {moment.duration}
 * [poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval] The
 * default value is 15 minutes. The minimum and maximum value are 5 minutes and
 * 168 hours respectively. If you specify a value less than 5 minutes or
 * greater than 168 hours, the Batch service rejects the request with an
 * invalid property value error; if you are calling the REST API directly, the
 * HTTP status code is 400 (Bad Request).
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication] Enabling
 * inter-node communication limits the maximum size of the pool due to
 * deployment restrictions on the nodes of the pool. This may result in the
 * pool not reaching its desired size. The default value is false.
 * @member {object} [poolInfo.autoPoolSpecification.pool.networkConfiguration]
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId] The
 * virtual network must be in the same region and subscription as the Azure
 * Batch account. The specified subnet should have enough free IP addresses to
 * accommodate the number of nodes in the pool. If the subnet doesn't have
 * enough free IP addresses, the pool will partially allocate compute nodes,
 * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
 * must have the 'Classic Virtual Machine Contributor' Role-Based Access
 * Control (RBAC) role for the specified VNet. The specified subnet must allow
 * communication from the Azure Batch service to be able to schedule tasks on
 * the compute nodes. This can be verified by checking if the specified VNet
 * has any associated Network Security Groups (NSG). If communication to the
 * compute nodes in the specified subnet is denied by an NSG, then the Batch
 * service will set the state of the compute nodes to unusable. For pools
 * created via virtualMachineConfiguration the Batch account must have
 * poolAllocationMode userSubscription in order to use a VNet. If the specified
 * VNet has any associated Network Security Groups (NSG), then a few reserved
 * system ports must be enabled for inbound communication. For pools created
 * with a virtual machine configuration, enable ports 29876 and 29877, as well
 * as port 22 for Linux and port 3389 for Windows. For pools created with a
 * cloud service configuration, enable ports 10100, 20100, and 30100. Also
 * enable outbound connections to Azure Storage on port 443. For more details
 * see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
 * Pool endpoint configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object} [poolInfo.autoPoolSpecification.pool.startTask]
 * @member {string} [poolInfo.autoPoolSpecification.pool.startTask.commandLine]
 * The command line does not run under a shell, and therefore cannot take
 * advantage of shell features such as environment variable expansion. If you
 * want to take advantage of such features, you should invoke the shell in the
 * command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.startTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity] If omitted, the
 * task runs as a non-administrative user unique to the task.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
 * Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {number}
 * [poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount] The Batch
 * service retries a task if its exit code is nonzero. Note that this value
 * specifically controls the number of retries. The Batch service will try the
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * the task. If the maximum retry count is -1, the Batch service retries the
 * task without limit.
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess] If true and
 * the start task fails on a compute node, the Batch service retries the start
 * task up to its maximum retry count (maxTaskRetryCount). If the task has
 * still not completed successfully after all retries, then the Batch service
 * marks the compute node unusable, and will not schedule tasks to it. This
 * condition can be detected via the node state and failure info details. If
 * false, the Batch service will not wait for the start task to complete. In
 * this case, other tasks can start executing on the compute node while the
 * start task is still running; and even if the start task fails, new tasks
 * will continue to be scheduled on the node. The default is false.
 * @member {array} [poolInfo.autoPoolSpecification.pool.certificateReferences]
 * For Windows compute nodes, the Batch service installs the certificates to
 * the specified certificate store and location. For Linux compute nodes, the
 * certificates are stored in a directory inside the task working directory and
 * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
 * query for this location. For certificates with visibility of 'remoteUser', a
 * 'certs' directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
 * @member {array} [poolInfo.autoPoolSpecification.pool.applicationLicenses]
 * The list of application licenses must be a subset of available Batch service
 * application licenses. If a license is requested which is not supported, pool
 * creation will fail.
 * @member {array} [poolInfo.autoPoolSpecification.pool.userAccounts]
 * @member {array} [poolInfo.autoPoolSpecification.pool.metadata] The Batch
 * service does not assign any meaning to metadata; it is solely for the use of
 * user code.
 * @member {array} [metadata] A list of name-value pairs associated with each
 * job created under this schedule as metadata. The Batch service does not
 * assign any meaning to metadata; it is solely for the use of user code.
 */
export interface JobSpecification {
    priority?: number;
    displayName?: string;
    usesTaskDependencies?: boolean;
    onAllTasksComplete?: string;
    onTaskFailure?: string;
    constraints?: JobConstraints;
    jobManagerTask?: JobManagerTask;
    jobPreparationTask?: JobPreparationTask;
    jobReleaseTask?: JobReleaseTask;
    commonEnvironmentSettings?: EnvironmentSetting[];
    poolInfo: PoolInformation;
    metadata?: MetadataItem[];
}
/**
 * @class
 * Initializes a new instance of the RecentJob class.
 * @constructor
 * @summary Information about the most recent job to run under the job
 * schedule.
 *
 * @member {string} [id] The ID of the job.
 * @member {string} [url] The URL of the job.
 */
export interface RecentJob {
    id?: string;
    url?: string;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleExecutionInformation class.
 * @constructor
 * @summary Contains information about jobs that have been and will be run
 * under a job schedule.
 *
 * @member {date} [nextRunTime] The next time at which a job will be created
 * under this schedule. This property is meaningful only if the schedule is in
 * the active state when the time comes around. For example, if the schedule is
 * disabled, no job will be created at nextRunTime unless the job is enabled
 * before then.
 * @member {object} [recentJob] Information about the most recent job under the
 * job schedule. This property is present only if the at least one job has run
 * under the schedule.
 * @member {string} [recentJob.id]
 * @member {string} [recentJob.url]
 * @member {date} [endTime] The time at which the schedule ended. This property
 * is set only if the job schedule is in the completed state.
 */
export interface JobScheduleExecutionInformation {
    nextRunTime?: Date;
    recentJob?: RecentJob;
    endTime?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleStatistics class.
 * @constructor
 * @summary Resource usage statistics for a job schedule.
 *
 * @member {string} url The URL of the statistics.
 * @member {date} startTime The start time of the time range covered by the
 * statistics.
 * @member {date} lastUpdateTime The time at which the statistics were last
 * updated. All statistics are limited to the range between startTime and
 * lastUpdateTime.
 * @member {moment.duration} userCPUTime The total user mode CPU time (summed
 * across all cores and all compute nodes) consumed by all tasks in all jobs
 * created under the schedule.
 * @member {moment.duration} kernelCPUTime The total kernel mode CPU time
 * (summed across all cores and all compute nodes) consumed by all tasks in all
 * jobs created under the schedule.
 * @member {moment.duration} wallClockTime The total wall clock time of all the
 * tasks in all the jobs created under the schedule. The wall clock time is the
 * elapsed time from when the task started running on a compute node to when it
 * finished (or to the last time the statistics were updated, if the task had
 * not finished by then). If a task was retried, this includes the wall clock
 * time of all the task retries.
 * @member {number} readIOps The total number of disk read operations made by
 * all tasks in all jobs created under the schedule.
 * @member {number} writeIOps The total number of disk write operations made by
 * all tasks in all jobs created under the schedule.
 * @member {number} readIOGiB The total gibibytes read from disk by all tasks
 * in all jobs created under the schedule.
 * @member {number} writeIOGiB The total gibibytes written to disk by all tasks
 * in all jobs created under the schedule.
 * @member {number} numSucceededTasks The total number of tasks successfully
 * completed during the given time range in jobs created under the schedule. A
 * task completes successfully if it returns exit code 0.
 * @member {number} numFailedTasks The total number of tasks that failed during
 * the given time range in jobs created under the schedule. A task fails if it
 * exhausts its maximum retry count without returning exit code 0.
 * @member {number} numTaskRetries The total number of retries during the given
 * time range on all tasks in all jobs created under the schedule.
 * @member {moment.duration} waitTime The total wait time of all tasks in all
 * jobs created under the schedule. The wait time for a task is defined as the
 * elapsed time between the creation of the task and the start of task
 * execution. (If the task is retried due to failures, the wait time is the
 * time to the most recent task execution.). This value is only reported in the
 * account lifetime statistics; it is not included in the job statistics.
 */
export interface JobScheduleStatistics {
    url: string;
    startTime: Date;
    lastUpdateTime: Date;
    userCPUTime: moment.Duration;
    kernelCPUTime: moment.Duration;
    wallClockTime: moment.Duration;
    readIOps: number;
    writeIOps: number;
    readIOGiB: number;
    writeIOGiB: number;
    numSucceededTasks: number;
    numFailedTasks: number;
    numTaskRetries: number;
    waitTime: moment.Duration;
}
/**
 * @class
 * Initializes a new instance of the CloudJobSchedule class.
 * @constructor
 * @summary A job schedule that allows recurring jobs by specifying when to run
 * jobs and a specification used to create each job.
 *
 * @member {string} [id] A string that uniquely identifies the schedule within
 * the account.
 * @member {string} [displayName] The display name for the schedule.
 * @member {string} [url] The URL of the job schedule.
 * @member {string} [eTag] The ETag of the job schedule. This is an opaque
 * string. You can use it to detect whether the job schedule has changed
 * between requests. In particular, you can be pass the ETag with an Update Job
 * Schedule request to specify that your changes should take effect only if
 * nobody else has modified the schedule in the meantime.
 * @member {date} [lastModified] The last modified time of the job schedule.
 * This is the last time at which the schedule level data, such as the job
 * specification or recurrence information, changed. It does not factor in
 * job-level changes such as new jobs being created or jobs changing state.
 * @member {date} [creationTime] The creation time of the job schedule.
 * @member {string} [state] The current state of the job schedule. Possible
 * values include: 'active', 'completed', 'disabled', 'terminating', 'deleting'
 * @member {date} [stateTransitionTime] The time at which the job schedule
 * entered the current state.
 * @member {string} [previousState] The previous state of the job schedule.
 * This property is not present if the job schedule is in its initial active
 * state. Possible values include: 'active', 'completed', 'disabled',
 * 'terminating', 'deleting'
 * @member {date} [previousStateTransitionTime] The time at which the job
 * schedule entered its previous state. This property is not present if the job
 * schedule is in its initial active state.
 * @member {object} [schedule] The schedule according to which jobs will be
 * created.
 * @member {date} [schedule.doNotRunUntil] If you do not specify a
 * doNotRunUntil time, the schedule becomes ready to create jobs immediately.
 * @member {date} [schedule.doNotRunAfter] If you do not specify a
 * doNotRunAfter time, and you are creating a recurring job schedule, the job
 * schedule will remain active until you explicitly terminate it.
 * @member {moment.duration} [schedule.startWindow] If a job is not created
 * within the startWindow interval, then the 'opportunity' is lost; no job will
 * be created until the next recurrence of the schedule. If the schedule is
 * recurring, and the startWindow is longer than the recurrence interval, then
 * this is equivalent to an infinite startWindow, because the job that is 'due'
 * in one recurrenceInterval is not carried forward into the next recurrence
 * interval. The default is infinite. The minimum value is 1 minute. If you
 * specify a lower value, the Batch service rejects the schedule with an error;
 * if you are calling the REST API directly, the HTTP status code is 400 (Bad
 * Request).
 * @member {moment.duration} [schedule.recurrenceInterval] Because a job
 * schedule can have at most one active job under it at any given time, if it
 * is time to create a new job under a job schedule, but the previous job is
 * still running, the Batch service will not create the new job until the
 * previous job finishes. If the previous job does not finish within the
 * startWindow period of the new recurrenceInterval, then no new job will be
 * scheduled for that interval. For recurring jobs, you should normally specify
 * a jobManagerTask in the jobSpecification. If you do not use jobManagerTask,
 * you will need an external process to monitor when jobs are created, add
 * tasks to the jobs and terminate the jobs ready for the next recurrence. The
 * default is that the schedule does not recur: one job is created, within the
 * startWindow after the doNotRunUntil time, and the schedule is complete as
 * soon as that job finishes. The minimum value is 1 minute. If you specify a
 * lower value, the Batch service rejects the schedule with an error; if you
 * are calling the REST API directly, the HTTP status code is 400 (Bad
 * Request).
 * @member {object} [jobSpecification] The details of the jobs to be created on
 * this schedule.
 * @member {number} [jobSpecification.priority] Priority values can range from
 * -1000 to 1000, with -1000 being the lowest priority and 1000 being the
 * highest priority. The default value is 0. This priority is used as the
 * default for all jobs under the job schedule. You can update a job's priority
 * after it has been created using by using the update job API.
 * @member {string} [jobSpecification.displayName] The name need not be unique
 * and can contain any Unicode characters up to a maximum length of 1024.
 * @member {boolean} [jobSpecification.usesTaskDependencies]
 * @member {string} [jobSpecification.onAllTasksComplete] Note that if a job
 * contains no tasks, then all tasks are considered complete. This option is
 * therefore most commonly used with a Job Manager task; if you want to use
 * automatic job termination without a Job Manager, you should initially set
 * onAllTasksComplete to noAction and update the job properties to set
 * onAllTasksComplete to terminateJob once you have finished adding tasks. The
 * default is noAction. Possible values include: 'noAction', 'terminateJob'
 * @member {string} [jobSpecification.onTaskFailure] The default is noAction.
 * Possible values include: 'noAction', 'performExitOptionsJobAction'
 * @member {object} [jobSpecification.constraints]
 * @member {moment.duration} [jobSpecification.constraints.maxWallClockTime] If
 * the job does not complete within the time limit, the Batch service
 * terminates it and any tasks that are still running. In this case, the
 * termination reason will be MaxWallClockTimeExpiry. If this property is not
 * specified, there is no time limit on how long the job may run.
 * @member {number} [jobSpecification.constraints.maxTaskRetryCount] Note that
 * this value specifically controls the number of retries. The Batch service
 * will try each task once, and may then retry up to this limit. For example,
 * if the maximum retry count is 3, Batch tries a task up to 4 times (one
 * initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry tasks. If the maximum retry count is -1, the Batch
 * service retries tasks without limit. The default value is 0 (no retries).
 * @member {object} [jobSpecification.jobManagerTask] If the job does not
 * specify a Job Manager task, the user must explicitly add tasks to the job
 * using the Task API. If the job does specify a Job Manager task, the Batch
 * service creates the Job Manager task when the job is created, and will try
 * to schedule the Job Manager task before scheduling other tasks in the job.
 * @member {string} [jobSpecification.jobManagerTask.id] The ID can contain any
 * combination of alphanumeric characters including hyphens and underscores and
 * cannot contain more than 64 characters.
 * @member {string} [jobSpecification.jobManagerTask.displayName] It need not
 * be unique and can contain any Unicode characters up to a maximum length of
 * 1024.
 * @member {string} [jobSpecification.jobManagerTask.commandLine] The command
 * line does not run under a shell, and therefore cannot take advantage of
 * shell features such as environment variable expansion. If you want to take
 * advantage of such features, you should invoke the shell in the command line,
 * for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in
 * Linux.
 * @member {array} [jobSpecification.jobManagerTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array} [jobSpecification.jobManagerTask.outputFiles] For
 * multi-instance tasks, the files will only be uploaded from the compute node
 * on which the primary task is executed.
 * @member {array} [jobSpecification.jobManagerTask.environmentSettings]
 * @member {object} [jobSpecification.jobManagerTask.constraints]
 * @member {moment.duration}
 * [jobSpecification.jobManagerTask.constraints.maxWallClockTime] If this is
 * not specified, there is no time limit on how long the task may run.
 * @member {moment.duration}
 * [jobSpecification.jobManagerTask.constraints.retentionTime] The default is
 * infinite, i.e. the task directory will be retained until the compute node is
 * removed or reimaged.
 * @member {number}
 * [jobSpecification.jobManagerTask.constraints.maxTaskRetryCount] Note that
 * this value specifically controls the number of retries. The Batch service
 * will try the task once, and may then retry up to this limit. For example, if
 * the maximum retry count is 3, Batch tries the task up to 4 times (one
 * initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobSpecification.jobManagerTask.killJobOnCompletion] If
 * true, when the Job Manager task completes, the Batch service marks the job
 * as complete. If any tasks are still running at this time (other than Job
 * Release), those tasks are terminated. If false, the completion of the Job
 * Manager task does not affect the job status. In this case, you should either
 * use the onAllTasksComplete attribute to terminate the job, or have a client
 * or user terminate the job explicitly. An example of this is if the Job
 * Manager creates a set of tasks but then takes no further role in their
 * execution. The default value is true. If you are using the
 * onAllTasksComplete and onTaskFailure attributes to control job lifetime, and
 * using the Job Manager task only to create the tasks for the job (not to
 * monitor progress), then it is important to set killJobOnCompletion to false.
 * @member {object} [jobSpecification.jobManagerTask.userIdentity] If omitted,
 * the task runs as a non-administrative user unique to the task.
 * @member {string} [jobSpecification.jobManagerTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object} [jobSpecification.jobManagerTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [jobSpecification.jobManagerTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.jobManagerTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean} [jobSpecification.jobManagerTask.runExclusive] If true, no
 * other tasks will run on the same compute node for as long as the Job Manager
 * is running. If false, other tasks can run simultaneously with the Job
 * Manager on a compute node. The Job Manager task counts normally against the
 * node's concurrent task limit, so this is only relevant if the node allows
 * multiple concurrent tasks. The default value is true.
 * @member {array}
 * [jobSpecification.jobManagerTask.applicationPackageReferences] Application
 * packages are downloaded and deployed to a shared directory, not the task
 * working directory. Therefore, if a referenced package is already on the
 * compute node, and is up to date, then it is not re-downloaded; the existing
 * copy on the compute node is used. If a referenced application package cannot
 * be installed, for example because the package has been deleted or because
 * download failed, the task fails.
 * @member {object}
 * [jobSpecification.jobManagerTask.authenticationTokenSettings] If this
 * property is set, the Batch service provides the task with an authentication
 * token which can be used to authenticate Batch service operations without
 * requiring an account access key. The token is provided via the
 * AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations that the
 * task can carry out using the token depend on the settings. For example, a
 * task can request job permissions in order to add other tasks to the job, or
 * check the status of the job or of other tasks under the job.
 * @member {array}
 * [jobSpecification.jobManagerTask.authenticationTokenSettings.access] The
 * authentication token grants access to a limited set of Batch service
 * operations. Currently the only supported value for the access property is
 * 'job', which grants access to all operations related to the job which
 * contains the task.
 * @member {boolean} [jobSpecification.jobManagerTask.allowLowPriorityNode] The
 * default value is false.
 * @member {object} [jobSpecification.jobPreparationTask] If a job has a Job
 * Preparation task, the Batch service will run the Job Preparation task on a
 * compute node before starting any tasks of that job on that compute node.
 * @member {string} [jobSpecification.jobPreparationTask.id] The ID can contain
 * any combination of alphanumeric characters including hyphens and underscores
 * and cannot contain more than 64 characters. If you do not specify this
 * property, the Batch service assigns a default value of 'jobpreparation'. No
 * other task in the job can have the same ID as the Job Preparation task. If
 * you try to submit a task with the same id, the Batch service rejects the
 * request with error code TaskIdSameAsJobPreparationTask; if you are calling
 * the REST API directly, the HTTP status code is 409 (Conflict).
 * @member {string} [jobSpecification.jobPreparationTask.commandLine] The
 * command line does not run under a shell, and therefore cannot take advantage
 * of shell features such as environment variable expansion. If you want to
 * take advantage of such features, you should invoke the shell in the command
 * line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array} [jobSpecification.jobPreparationTask.resourceFiles] Files
 * listed under this element are located in the task's working directory.
 * @member {array} [jobSpecification.jobPreparationTask.environmentSettings]
 * @member {object} [jobSpecification.jobPreparationTask.constraints]
 * @member {moment.duration}
 * [jobSpecification.jobPreparationTask.constraints.maxWallClockTime] If this
 * is not specified, there is no time limit on how long the task may run.
 * @member {moment.duration}
 * [jobSpecification.jobPreparationTask.constraints.retentionTime] The default
 * is infinite, i.e. the task directory will be retained until the compute node
 * is removed or reimaged.
 * @member {number}
 * [jobSpecification.jobPreparationTask.constraints.maxTaskRetryCount] Note
 * that this value specifically controls the number of retries. The Batch
 * service will try the task once, and may then retry up to this limit. For
 * example, if the maximum retry count is 3, Batch tries the task up to 4 times
 * (one initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobSpecification.jobPreparationTask.waitForSuccess] If
 * true and the Job Preparation task fails on a compute node, the Batch service
 * retries the Job Preparation task up to its maximum retry count (as specified
 * in the constraints element). If the task has still not completed
 * successfully after all retries, then the Batch service will not schedule
 * tasks of the job to the compute node. The compute node remains active and
 * eligible to run tasks of other jobs. If false, the Batch service will not
 * wait for the Job Preparation task to complete. In this case, other tasks of
 * the job can start executing on the compute node while the Job Preparation
 * task is still running; and even if the Job Preparation task fails, new tasks
 * will continue to be scheduled on the node. The default value is true.
 * @member {object} [jobSpecification.jobPreparationTask.userIdentity] If
 * omitted, the task runs as a non-administrative user unique to the task on
 * Windows nodes, or a a non-administrative user unique to the pool on Linux
 * nodes.
 * @member {string} [jobSpecification.jobPreparationTask.userIdentity.userName]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {object} [jobSpecification.jobPreparationTask.userIdentity.autoUser]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {string}
 * [jobSpecification.jobPreparationTask.userIdentity.autoUser.scope] Values
 * are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.jobPreparationTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean}
 * [jobSpecification.jobPreparationTask.rerunOnNodeRebootAfterSuccess] The Job
 * Preparation task is always rerun if a compute node is reimaged, or if the
 * Job Preparation task did not complete (e.g. because the reboot occurred
 * while the task was running). Therefore, you should always write a Job
 * Preparation task to be idempotent and to behave correctly if run multiple
 * times. The default value is true.
 * @member {object} [jobSpecification.jobReleaseTask] The primary purpose of
 * the Job Release task is to undo changes to compute nodes made by the Job
 * Preparation task. Example activities include deleting local files, or
 * shutting down services that were started as part of job preparation. A Job
 * Release task cannot be specified without also specifying a Job Preparation
 * task for the job. The Batch service runs the Job Release task on the compute
 * nodes that have run the Job Preparation task.
 * @member {string} [jobSpecification.jobReleaseTask.id] The ID can contain any
 * combination of alphanumeric characters including hyphens and underscores and
 * cannot contain more than 64 characters. If you do not specify this property,
 * the Batch service assigns a default value of 'jobrelease'. No other task in
 * the job can have the same ID as the Job Release task. If you try to submit a
 * task with the same id, the Batch service rejects the request with error code
 * TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the
 * HTTP status code is 409 (Conflict).
 * @member {string} [jobSpecification.jobReleaseTask.commandLine] The command
 * line does not run under a shell, and therefore cannot take advantage of
 * shell features such as environment variable expansion. If you want to take
 * advantage of such features, you should invoke the shell in the command line,
 * for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in
 * Linux.
 * @member {array} [jobSpecification.jobReleaseTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array} [jobSpecification.jobReleaseTask.environmentSettings]
 * @member {moment.duration} [jobSpecification.jobReleaseTask.maxWallClockTime]
 * @member {moment.duration} [jobSpecification.jobReleaseTask.retentionTime]
 * The default is infinite, i.e. the task directory will be retained until the
 * compute node is removed or reimaged.
 * @member {object} [jobSpecification.jobReleaseTask.userIdentity] If omitted,
 * the task runs as a non-administrative user unique to the task.
 * @member {string} [jobSpecification.jobReleaseTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object} [jobSpecification.jobReleaseTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [jobSpecification.jobReleaseTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.jobReleaseTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {array} [jobSpecification.commonEnvironmentSettings] Individual
 * tasks can override an environment setting specified here by specifying the
 * same setting name with a different value.
 * @member {object} [jobSpecification.poolInfo]
 * @member {string} [jobSpecification.poolInfo.poolId] You must ensure that the
 * pool referenced by this property exists. If the pool does not exist at the
 * time the Batch service tries to schedule a job, no tasks for the job will
 * run until you create a pool with that id. Note that the Batch service will
 * not reject the job request; it will simply not run tasks until the pool
 * exists. You must specify either the pool ID or the auto pool specification,
 * but not both.
 * @member {object} [jobSpecification.poolInfo.autoPoolSpecification] If auto
 * pool creation fails, the Batch service moves the job to a completed state,
 * and the pool creation error is set in the job's scheduling error property.
 * The Batch service manages the lifetime (both creation and, unless keepAlive
 * is specified, deletion) of the auto pool. Any user actions that affect the
 * lifetime of the auto pool while the job is active will result in unexpected
 * behavior. You must specify either the pool ID or the auto pool
 * specification, but not both.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.autoPoolIdPrefix] The Batch
 * service assigns each auto pool a unique identifier on creation. To
 * distinguish between pools created for different purposes, you can specify
 * this element to add a prefix to the ID that is assigned. The prefix can be
 * up to 20 characters long.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.poolLifetimeOption] When
 * the pool lifetime is jobSchedule the pool exists for the lifetime of the job
 * schedule. The Batch Service creates the pool when it creates the first job
 * on the schedule. You may apply this option only to job schedules, not to
 * jobs. When the pool lifetime is job the pool exists for the lifetime of the
 * job to which it is dedicated. The Batch service creates the pool when it
 * creates the job. If the 'job' option is applied to a job schedule, the Batch
 * service creates a new auto pool for every job created on the schedule.
 * Possible values include: 'jobSchedule', 'job'
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.keepAlive] If false, the
 * Batch service deletes the pool once its lifetime (as determined by the
 * poolLifetimeOption setting) expires; that is, when the job or job schedule
 * completes. If true, the Batch service does not delete the pool
 * automatically. It is up to the user to delete auto pools created with this
 * option.
 * @member {object} [jobSpecification.poolInfo.autoPoolSpecification.pool]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.displayName] The
 * display name need not be unique and can contain any Unicode characters up to
 * a maximum length of 1024.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.vmSize] For
 * information about available sizes of virtual machines for Cloud Services
 * pools (pools created with cloudServiceConfiguration), see Sizes for Cloud
 * Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
 * This property must be specified if the pool needs to be created with Azure
 * PaaS VMs. This property and virtualMachineConfiguration are mutually
 * exclusive and one of the properties must be specified. If neither is
 * specified then the Batch service returns an error; if you are calling the
 * REST API directly, the HTTP status code is 400 (Bad Request). This property
 * cannot be specified if the Batch account was created with its
 * poolAllocationMode property set to 'UserSubscription'.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily]
 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2
 * SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4,
 * equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows
 * Server 2016. For more information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
 * The default value is * which specifies the latest operating system version
 * for the specified OS family.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
 * This may differ from targetOSVersion if the pool state is Upgrading. In this
 * case some virtual machines may be on the targetOSVersion and some may be on
 * the currentOSVersion during the upgrade process. Once all virtual machines
 * have upgraded, currentOSVersion is updated to be the same as
 * targetOSVersion.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
 * This property must be specified if the pool needs to be created with Azure
 * IaaS VMs. This property and cloudServiceConfiguration are mutually exclusive
 * and one of the properties must be specified. If neither is specified then
 * the Batch service returns an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
 * This property and osDisk are mutually exclusive and one of the properties
 * must be specified.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
 * For example, Canonical or MicrosoftWindowsServer.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
 * For example, UbuntuServer or WindowsServer.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
 * For example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
 * A value of 'latest' can be specified to select the latest version of an
 * image. If omitted, the default is 'latest'.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
 * This property can be specified only if the Batch account was created with
 * its poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris]
 * All the VHDs must be identical and must reside in an Azure Storage account
 * within the same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
 * Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId]
 * The Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems. You must specify a node agent SKU
 * which matches the selected image reference. To get the list of supported
 * node agent SKUs along with their list of verified image references, see the
 * 'List supported node agent SKUs' operation.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
 * This property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * If omitted, the default value is true.
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
 * default value is 1. The maximum value of this setting depends on the size of
 * the compute nodes in the pool (the vmSize setting).
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType]
 * Possible values include: 'spread', 'pack'
 * @member {moment.duration}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.resizeTimeout] This
 * timeout applies only to manual scaling; it has no effect when
 * enableAutoScale is set to true. The default value is 15 minutes. The minimum
 * value is 5 minutes. If you specify a value less than 5 minutes, the Batch
 * service rejects the request with an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.enableAutoScale] If
 * false, at least one of targetDedicateNodes and targetLowPriorityNodes must
 * be specified. If true, the autoScaleFormula element is required. The pool
 * automatically resizes according to the formula. The default value is false.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleFormula] This
 * property must not be specified if enableAutoScale is set to false. It is
 * required if enableAutoScale is set to true. The formula is checked for
 * validity before the pool is created. If the formula is not valid, the Batch
 * service rejects the request with detailed error information.
 * @member {moment.duration}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
 * The default value is 15 minutes. The minimum and maximum value are 5 minutes
 * and 168 hours respectively. If you specify a value less than 5 minutes or
 * greater than 168 hours, the Batch service rejects the request with an
 * invalid property value error; if you are calling the REST API directly, the
 * HTTP status code is 400 (Bad Request).
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
 * Enabling inter-node communication limits the maximum size of the pool due to
 * deployment restrictions on the nodes of the pool. This may result in the
 * pool not reaching its desired size. The default value is false.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
 * The virtual network must be in the same region and subscription as the Azure
 * Batch account. The specified subnet should have enough free IP addresses to
 * accommodate the number of nodes in the pool. If the subnet doesn't have
 * enough free IP addresses, the pool will partially allocate compute nodes,
 * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
 * must have the 'Classic Virtual Machine Contributor' Role-Based Access
 * Control (RBAC) role for the specified VNet. The specified subnet must allow
 * communication from the Azure Batch service to be able to schedule tasks on
 * the compute nodes. This can be verified by checking if the specified VNet
 * has any associated Network Security Groups (NSG). If communication to the
 * compute nodes in the specified subnet is denied by an NSG, then the Batch
 * service will set the state of the compute nodes to unusable. For pools
 * created via virtualMachineConfiguration the Batch account must have
 * poolAllocationMode userSubscription in order to use a VNet. If the specified
 * VNet has any associated Network Security Groups (NSG), then a few reserved
 * system ports must be enabled for inbound communication. For pools created
 * with a virtual machine configuration, enable ports 29876 and 29877, as well
 * as port 22 for Linux and port 3389 for Windows. For pools created with a
 * cloud service configuration, enable ports 10100, 20100, and 30100. Also
 * enable outbound connections to Azure Storage on port 443. For more details
 * see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
 * Pool endpoint configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.commandLine]
 * The command line does not run under a shell, and therefore cannot take
 * advantage of shell features such as environment variable expansion. If you
 * want to take advantage of such features, you should invoke the shell in the
 * command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
 * Files listed under this element are located in the task's working directory.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
 * If omitted, the task runs as a non-administrative user unique to the task.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
 * Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
 * The Batch service retries a task if its exit code is nonzero. Note that this
 * value specifically controls the number of retries. The Batch service will
 * try the task once, and may then retry up to this limit. For example, if the
 * maximum retry count is 3, Batch tries the task up to 4 times (one initial
 * try and 3 retries). If the maximum retry count is 0, the Batch service does
 * not retry the task. If the maximum retry count is -1, the Batch service
 * retries the task without limit.
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
 * If true and the start task fails on a compute node, the Batch service
 * retries the start task up to its maximum retry count (maxTaskRetryCount). If
 * the task has still not completed successfully after all retries, then the
 * Batch service marks the compute node unusable, and will not schedule tasks
 * to it. This condition can be detected via the node state and failure info
 * details. If false, the Batch service will not wait for the start task to
 * complete. In this case, other tasks can start executing on the compute node
 * while the start task is still running; and even if the start task fails, new
 * tasks will continue to be scheduled on the node. The default is false.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.certificateReferences]
 * For Windows compute nodes, the Batch service installs the certificates to
 * the specified certificate store and location. For Linux compute nodes, the
 * certificates are stored in a directory inside the task working directory and
 * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
 * query for this location. For certificates with visibility of 'remoteUser', a
 * 'certs' directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.applicationLicenses]
 * The list of application licenses must be a subset of available Batch service
 * application licenses. If a license is requested which is not supported, pool
 * creation will fail.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.userAccounts]
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.metadata] The Batch
 * service does not assign any meaning to metadata; it is solely for the use of
 * user code.
 * @member {array} [jobSpecification.metadata] The Batch service does not
 * assign any meaning to metadata; it is solely for the use of user code.
 * @member {object} [executionInfo] Information about jobs that have been and
 * will be run under this schedule.
 * @member {date} [executionInfo.nextRunTime] This property is meaningful only
 * if the schedule is in the active state when the time comes around. For
 * example, if the schedule is disabled, no job will be created at nextRunTime
 * unless the job is enabled before then.
 * @member {object} [executionInfo.recentJob] This property is present only if
 * the at least one job has run under the schedule.
 * @member {string} [executionInfo.recentJob.id]
 * @member {string} [executionInfo.recentJob.url]
 * @member {date} [executionInfo.endTime] This property is set only if the job
 * schedule is in the completed state.
 * @member {array} [metadata] A list of name-value pairs associated with the
 * schedule as metadata. The Batch service does not assign any meaning to
 * metadata; it is solely for the use of user code.
 * @member {object} [stats] The lifetime resource usage statistics for the job
 * schedule.
 * @member {string} [stats.url]
 * @member {date} [stats.startTime]
 * @member {date} [stats.lastUpdateTime]
 * @member {moment.duration} [stats.userCPUTime]
 * @member {moment.duration} [stats.kernelCPUTime]
 * @member {moment.duration} [stats.wallClockTime] The wall clock time is the
 * elapsed time from when the task started running on a compute node to when it
 * finished (or to the last time the statistics were updated, if the task had
 * not finished by then). If a task was retried, this includes the wall clock
 * time of all the task retries.
 * @member {number} [stats.readIOps]
 * @member {number} [stats.writeIOps]
 * @member {number} [stats.readIOGiB]
 * @member {number} [stats.writeIOGiB]
 * @member {number} [stats.numSucceededTasks]
 * @member {number} [stats.numFailedTasks]
 * @member {number} [stats.numTaskRetries]
 * @member {moment.duration} [stats.waitTime] This value is only reported in
 * the account lifetime statistics; it is not included in the job statistics.
 */
export interface CloudJobSchedule {
    id?: string;
    displayName?: string;
    url?: string;
    eTag?: string;
    lastModified?: Date;
    creationTime?: Date;
    state?: string;
    stateTransitionTime?: Date;
    previousState?: string;
    previousStateTransitionTime?: Date;
    schedule?: Schedule;
    jobSpecification?: JobSpecification;
    executionInfo?: JobScheduleExecutionInformation;
    metadata?: MetadataItem[];
    stats?: JobScheduleStatistics;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleAddParameter class.
 * @constructor
 * @summary A job schedule that allows recurring jobs by specifying when to run
 * jobs and a specification used to create each job.
 *
 * @member {string} id A string that uniquely identifies the schedule within
 * the account. The ID can contain any combination of alphanumeric characters
 * including hyphens and underscores, and cannot contain more than 64
 * characters. The ID is case-preserving and case-insensitive (that is, you may
 * not have two IDs within an account that differ only by case).
 * @member {string} [displayName] The display name for the schedule. The
 * display name need not be unique and can contain any Unicode characters up to
 * a maximum length of 1024.
 * @member {object} schedule The schedule according to which jobs will be
 * created.
 * @member {date} [schedule.doNotRunUntil] If you do not specify a
 * doNotRunUntil time, the schedule becomes ready to create jobs immediately.
 * @member {date} [schedule.doNotRunAfter] If you do not specify a
 * doNotRunAfter time, and you are creating a recurring job schedule, the job
 * schedule will remain active until you explicitly terminate it.
 * @member {moment.duration} [schedule.startWindow] If a job is not created
 * within the startWindow interval, then the 'opportunity' is lost; no job will
 * be created until the next recurrence of the schedule. If the schedule is
 * recurring, and the startWindow is longer than the recurrence interval, then
 * this is equivalent to an infinite startWindow, because the job that is 'due'
 * in one recurrenceInterval is not carried forward into the next recurrence
 * interval. The default is infinite. The minimum value is 1 minute. If you
 * specify a lower value, the Batch service rejects the schedule with an error;
 * if you are calling the REST API directly, the HTTP status code is 400 (Bad
 * Request).
 * @member {moment.duration} [schedule.recurrenceInterval] Because a job
 * schedule can have at most one active job under it at any given time, if it
 * is time to create a new job under a job schedule, but the previous job is
 * still running, the Batch service will not create the new job until the
 * previous job finishes. If the previous job does not finish within the
 * startWindow period of the new recurrenceInterval, then no new job will be
 * scheduled for that interval. For recurring jobs, you should normally specify
 * a jobManagerTask in the jobSpecification. If you do not use jobManagerTask,
 * you will need an external process to monitor when jobs are created, add
 * tasks to the jobs and terminate the jobs ready for the next recurrence. The
 * default is that the schedule does not recur: one job is created, within the
 * startWindow after the doNotRunUntil time, and the schedule is complete as
 * soon as that job finishes. The minimum value is 1 minute. If you specify a
 * lower value, the Batch service rejects the schedule with an error; if you
 * are calling the REST API directly, the HTTP status code is 400 (Bad
 * Request).
 * @member {object} jobSpecification The details of the jobs to be created on
 * this schedule.
 * @member {number} [jobSpecification.priority] Priority values can range from
 * -1000 to 1000, with -1000 being the lowest priority and 1000 being the
 * highest priority. The default value is 0. This priority is used as the
 * default for all jobs under the job schedule. You can update a job's priority
 * after it has been created using by using the update job API.
 * @member {string} [jobSpecification.displayName] The name need not be unique
 * and can contain any Unicode characters up to a maximum length of 1024.
 * @member {boolean} [jobSpecification.usesTaskDependencies]
 * @member {string} [jobSpecification.onAllTasksComplete] Note that if a job
 * contains no tasks, then all tasks are considered complete. This option is
 * therefore most commonly used with a Job Manager task; if you want to use
 * automatic job termination without a Job Manager, you should initially set
 * onAllTasksComplete to noAction and update the job properties to set
 * onAllTasksComplete to terminateJob once you have finished adding tasks. The
 * default is noAction. Possible values include: 'noAction', 'terminateJob'
 * @member {string} [jobSpecification.onTaskFailure] The default is noAction.
 * Possible values include: 'noAction', 'performExitOptionsJobAction'
 * @member {object} [jobSpecification.constraints]
 * @member {moment.duration} [jobSpecification.constraints.maxWallClockTime] If
 * the job does not complete within the time limit, the Batch service
 * terminates it and any tasks that are still running. In this case, the
 * termination reason will be MaxWallClockTimeExpiry. If this property is not
 * specified, there is no time limit on how long the job may run.
 * @member {number} [jobSpecification.constraints.maxTaskRetryCount] Note that
 * this value specifically controls the number of retries. The Batch service
 * will try each task once, and may then retry up to this limit. For example,
 * if the maximum retry count is 3, Batch tries a task up to 4 times (one
 * initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry tasks. If the maximum retry count is -1, the Batch
 * service retries tasks without limit. The default value is 0 (no retries).
 * @member {object} [jobSpecification.jobManagerTask] If the job does not
 * specify a Job Manager task, the user must explicitly add tasks to the job
 * using the Task API. If the job does specify a Job Manager task, the Batch
 * service creates the Job Manager task when the job is created, and will try
 * to schedule the Job Manager task before scheduling other tasks in the job.
 * @member {string} [jobSpecification.jobManagerTask.id] The ID can contain any
 * combination of alphanumeric characters including hyphens and underscores and
 * cannot contain more than 64 characters.
 * @member {string} [jobSpecification.jobManagerTask.displayName] It need not
 * be unique and can contain any Unicode characters up to a maximum length of
 * 1024.
 * @member {string} [jobSpecification.jobManagerTask.commandLine] The command
 * line does not run under a shell, and therefore cannot take advantage of
 * shell features such as environment variable expansion. If you want to take
 * advantage of such features, you should invoke the shell in the command line,
 * for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in
 * Linux.
 * @member {array} [jobSpecification.jobManagerTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array} [jobSpecification.jobManagerTask.outputFiles] For
 * multi-instance tasks, the files will only be uploaded from the compute node
 * on which the primary task is executed.
 * @member {array} [jobSpecification.jobManagerTask.environmentSettings]
 * @member {object} [jobSpecification.jobManagerTask.constraints]
 * @member {moment.duration}
 * [jobSpecification.jobManagerTask.constraints.maxWallClockTime] If this is
 * not specified, there is no time limit on how long the task may run.
 * @member {moment.duration}
 * [jobSpecification.jobManagerTask.constraints.retentionTime] The default is
 * infinite, i.e. the task directory will be retained until the compute node is
 * removed or reimaged.
 * @member {number}
 * [jobSpecification.jobManagerTask.constraints.maxTaskRetryCount] Note that
 * this value specifically controls the number of retries. The Batch service
 * will try the task once, and may then retry up to this limit. For example, if
 * the maximum retry count is 3, Batch tries the task up to 4 times (one
 * initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobSpecification.jobManagerTask.killJobOnCompletion] If
 * true, when the Job Manager task completes, the Batch service marks the job
 * as complete. If any tasks are still running at this time (other than Job
 * Release), those tasks are terminated. If false, the completion of the Job
 * Manager task does not affect the job status. In this case, you should either
 * use the onAllTasksComplete attribute to terminate the job, or have a client
 * or user terminate the job explicitly. An example of this is if the Job
 * Manager creates a set of tasks but then takes no further role in their
 * execution. The default value is true. If you are using the
 * onAllTasksComplete and onTaskFailure attributes to control job lifetime, and
 * using the Job Manager task only to create the tasks for the job (not to
 * monitor progress), then it is important to set killJobOnCompletion to false.
 * @member {object} [jobSpecification.jobManagerTask.userIdentity] If omitted,
 * the task runs as a non-administrative user unique to the task.
 * @member {string} [jobSpecification.jobManagerTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object} [jobSpecification.jobManagerTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [jobSpecification.jobManagerTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.jobManagerTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean} [jobSpecification.jobManagerTask.runExclusive] If true, no
 * other tasks will run on the same compute node for as long as the Job Manager
 * is running. If false, other tasks can run simultaneously with the Job
 * Manager on a compute node. The Job Manager task counts normally against the
 * node's concurrent task limit, so this is only relevant if the node allows
 * multiple concurrent tasks. The default value is true.
 * @member {array}
 * [jobSpecification.jobManagerTask.applicationPackageReferences] Application
 * packages are downloaded and deployed to a shared directory, not the task
 * working directory. Therefore, if a referenced package is already on the
 * compute node, and is up to date, then it is not re-downloaded; the existing
 * copy on the compute node is used. If a referenced application package cannot
 * be installed, for example because the package has been deleted or because
 * download failed, the task fails.
 * @member {object}
 * [jobSpecification.jobManagerTask.authenticationTokenSettings] If this
 * property is set, the Batch service provides the task with an authentication
 * token which can be used to authenticate Batch service operations without
 * requiring an account access key. The token is provided via the
 * AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations that the
 * task can carry out using the token depend on the settings. For example, a
 * task can request job permissions in order to add other tasks to the job, or
 * check the status of the job or of other tasks under the job.
 * @member {array}
 * [jobSpecification.jobManagerTask.authenticationTokenSettings.access] The
 * authentication token grants access to a limited set of Batch service
 * operations. Currently the only supported value for the access property is
 * 'job', which grants access to all operations related to the job which
 * contains the task.
 * @member {boolean} [jobSpecification.jobManagerTask.allowLowPriorityNode] The
 * default value is false.
 * @member {object} [jobSpecification.jobPreparationTask] If a job has a Job
 * Preparation task, the Batch service will run the Job Preparation task on a
 * compute node before starting any tasks of that job on that compute node.
 * @member {string} [jobSpecification.jobPreparationTask.id] The ID can contain
 * any combination of alphanumeric characters including hyphens and underscores
 * and cannot contain more than 64 characters. If you do not specify this
 * property, the Batch service assigns a default value of 'jobpreparation'. No
 * other task in the job can have the same ID as the Job Preparation task. If
 * you try to submit a task with the same id, the Batch service rejects the
 * request with error code TaskIdSameAsJobPreparationTask; if you are calling
 * the REST API directly, the HTTP status code is 409 (Conflict).
 * @member {string} [jobSpecification.jobPreparationTask.commandLine] The
 * command line does not run under a shell, and therefore cannot take advantage
 * of shell features such as environment variable expansion. If you want to
 * take advantage of such features, you should invoke the shell in the command
 * line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array} [jobSpecification.jobPreparationTask.resourceFiles] Files
 * listed under this element are located in the task's working directory.
 * @member {array} [jobSpecification.jobPreparationTask.environmentSettings]
 * @member {object} [jobSpecification.jobPreparationTask.constraints]
 * @member {moment.duration}
 * [jobSpecification.jobPreparationTask.constraints.maxWallClockTime] If this
 * is not specified, there is no time limit on how long the task may run.
 * @member {moment.duration}
 * [jobSpecification.jobPreparationTask.constraints.retentionTime] The default
 * is infinite, i.e. the task directory will be retained until the compute node
 * is removed or reimaged.
 * @member {number}
 * [jobSpecification.jobPreparationTask.constraints.maxTaskRetryCount] Note
 * that this value specifically controls the number of retries. The Batch
 * service will try the task once, and may then retry up to this limit. For
 * example, if the maximum retry count is 3, Batch tries the task up to 4 times
 * (one initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobSpecification.jobPreparationTask.waitForSuccess] If
 * true and the Job Preparation task fails on a compute node, the Batch service
 * retries the Job Preparation task up to its maximum retry count (as specified
 * in the constraints element). If the task has still not completed
 * successfully after all retries, then the Batch service will not schedule
 * tasks of the job to the compute node. The compute node remains active and
 * eligible to run tasks of other jobs. If false, the Batch service will not
 * wait for the Job Preparation task to complete. In this case, other tasks of
 * the job can start executing on the compute node while the Job Preparation
 * task is still running; and even if the Job Preparation task fails, new tasks
 * will continue to be scheduled on the node. The default value is true.
 * @member {object} [jobSpecification.jobPreparationTask.userIdentity] If
 * omitted, the task runs as a non-administrative user unique to the task on
 * Windows nodes, or a a non-administrative user unique to the pool on Linux
 * nodes.
 * @member {string} [jobSpecification.jobPreparationTask.userIdentity.userName]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {object} [jobSpecification.jobPreparationTask.userIdentity.autoUser]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {string}
 * [jobSpecification.jobPreparationTask.userIdentity.autoUser.scope] Values
 * are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.jobPreparationTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean}
 * [jobSpecification.jobPreparationTask.rerunOnNodeRebootAfterSuccess] The Job
 * Preparation task is always rerun if a compute node is reimaged, or if the
 * Job Preparation task did not complete (e.g. because the reboot occurred
 * while the task was running). Therefore, you should always write a Job
 * Preparation task to be idempotent and to behave correctly if run multiple
 * times. The default value is true.
 * @member {object} [jobSpecification.jobReleaseTask] The primary purpose of
 * the Job Release task is to undo changes to compute nodes made by the Job
 * Preparation task. Example activities include deleting local files, or
 * shutting down services that were started as part of job preparation. A Job
 * Release task cannot be specified without also specifying a Job Preparation
 * task for the job. The Batch service runs the Job Release task on the compute
 * nodes that have run the Job Preparation task.
 * @member {string} [jobSpecification.jobReleaseTask.id] The ID can contain any
 * combination of alphanumeric characters including hyphens and underscores and
 * cannot contain more than 64 characters. If you do not specify this property,
 * the Batch service assigns a default value of 'jobrelease'. No other task in
 * the job can have the same ID as the Job Release task. If you try to submit a
 * task with the same id, the Batch service rejects the request with error code
 * TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the
 * HTTP status code is 409 (Conflict).
 * @member {string} [jobSpecification.jobReleaseTask.commandLine] The command
 * line does not run under a shell, and therefore cannot take advantage of
 * shell features such as environment variable expansion. If you want to take
 * advantage of such features, you should invoke the shell in the command line,
 * for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in
 * Linux.
 * @member {array} [jobSpecification.jobReleaseTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array} [jobSpecification.jobReleaseTask.environmentSettings]
 * @member {moment.duration} [jobSpecification.jobReleaseTask.maxWallClockTime]
 * @member {moment.duration} [jobSpecification.jobReleaseTask.retentionTime]
 * The default is infinite, i.e. the task directory will be retained until the
 * compute node is removed or reimaged.
 * @member {object} [jobSpecification.jobReleaseTask.userIdentity] If omitted,
 * the task runs as a non-administrative user unique to the task.
 * @member {string} [jobSpecification.jobReleaseTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object} [jobSpecification.jobReleaseTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [jobSpecification.jobReleaseTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.jobReleaseTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {array} [jobSpecification.commonEnvironmentSettings] Individual
 * tasks can override an environment setting specified here by specifying the
 * same setting name with a different value.
 * @member {object} [jobSpecification.poolInfo]
 * @member {string} [jobSpecification.poolInfo.poolId] You must ensure that the
 * pool referenced by this property exists. If the pool does not exist at the
 * time the Batch service tries to schedule a job, no tasks for the job will
 * run until you create a pool with that id. Note that the Batch service will
 * not reject the job request; it will simply not run tasks until the pool
 * exists. You must specify either the pool ID or the auto pool specification,
 * but not both.
 * @member {object} [jobSpecification.poolInfo.autoPoolSpecification] If auto
 * pool creation fails, the Batch service moves the job to a completed state,
 * and the pool creation error is set in the job's scheduling error property.
 * The Batch service manages the lifetime (both creation and, unless keepAlive
 * is specified, deletion) of the auto pool. Any user actions that affect the
 * lifetime of the auto pool while the job is active will result in unexpected
 * behavior. You must specify either the pool ID or the auto pool
 * specification, but not both.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.autoPoolIdPrefix] The Batch
 * service assigns each auto pool a unique identifier on creation. To
 * distinguish between pools created for different purposes, you can specify
 * this element to add a prefix to the ID that is assigned. The prefix can be
 * up to 20 characters long.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.poolLifetimeOption] When
 * the pool lifetime is jobSchedule the pool exists for the lifetime of the job
 * schedule. The Batch Service creates the pool when it creates the first job
 * on the schedule. You may apply this option only to job schedules, not to
 * jobs. When the pool lifetime is job the pool exists for the lifetime of the
 * job to which it is dedicated. The Batch service creates the pool when it
 * creates the job. If the 'job' option is applied to a job schedule, the Batch
 * service creates a new auto pool for every job created on the schedule.
 * Possible values include: 'jobSchedule', 'job'
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.keepAlive] If false, the
 * Batch service deletes the pool once its lifetime (as determined by the
 * poolLifetimeOption setting) expires; that is, when the job or job schedule
 * completes. If true, the Batch service does not delete the pool
 * automatically. It is up to the user to delete auto pools created with this
 * option.
 * @member {object} [jobSpecification.poolInfo.autoPoolSpecification.pool]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.displayName] The
 * display name need not be unique and can contain any Unicode characters up to
 * a maximum length of 1024.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.vmSize] For
 * information about available sizes of virtual machines for Cloud Services
 * pools (pools created with cloudServiceConfiguration), see Sizes for Cloud
 * Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
 * This property must be specified if the pool needs to be created with Azure
 * PaaS VMs. This property and virtualMachineConfiguration are mutually
 * exclusive and one of the properties must be specified. If neither is
 * specified then the Batch service returns an error; if you are calling the
 * REST API directly, the HTTP status code is 400 (Bad Request). This property
 * cannot be specified if the Batch account was created with its
 * poolAllocationMode property set to 'UserSubscription'.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily]
 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2
 * SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4,
 * equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows
 * Server 2016. For more information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
 * The default value is * which specifies the latest operating system version
 * for the specified OS family.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
 * This may differ from targetOSVersion if the pool state is Upgrading. In this
 * case some virtual machines may be on the targetOSVersion and some may be on
 * the currentOSVersion during the upgrade process. Once all virtual machines
 * have upgraded, currentOSVersion is updated to be the same as
 * targetOSVersion.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
 * This property must be specified if the pool needs to be created with Azure
 * IaaS VMs. This property and cloudServiceConfiguration are mutually exclusive
 * and one of the properties must be specified. If neither is specified then
 * the Batch service returns an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
 * This property and osDisk are mutually exclusive and one of the properties
 * must be specified.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
 * For example, Canonical or MicrosoftWindowsServer.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
 * For example, UbuntuServer or WindowsServer.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
 * For example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
 * A value of 'latest' can be specified to select the latest version of an
 * image. If omitted, the default is 'latest'.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
 * This property can be specified only if the Batch account was created with
 * its poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris]
 * All the VHDs must be identical and must reside in an Azure Storage account
 * within the same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
 * Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId]
 * The Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems. You must specify a node agent SKU
 * which matches the selected image reference. To get the list of supported
 * node agent SKUs along with their list of verified image references, see the
 * 'List supported node agent SKUs' operation.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
 * This property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * If omitted, the default value is true.
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
 * default value is 1. The maximum value of this setting depends on the size of
 * the compute nodes in the pool (the vmSize setting).
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType]
 * Possible values include: 'spread', 'pack'
 * @member {moment.duration}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.resizeTimeout] This
 * timeout applies only to manual scaling; it has no effect when
 * enableAutoScale is set to true. The default value is 15 minutes. The minimum
 * value is 5 minutes. If you specify a value less than 5 minutes, the Batch
 * service rejects the request with an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.enableAutoScale] If
 * false, at least one of targetDedicateNodes and targetLowPriorityNodes must
 * be specified. If true, the autoScaleFormula element is required. The pool
 * automatically resizes according to the formula. The default value is false.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleFormula] This
 * property must not be specified if enableAutoScale is set to false. It is
 * required if enableAutoScale is set to true. The formula is checked for
 * validity before the pool is created. If the formula is not valid, the Batch
 * service rejects the request with detailed error information.
 * @member {moment.duration}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
 * The default value is 15 minutes. The minimum and maximum value are 5 minutes
 * and 168 hours respectively. If you specify a value less than 5 minutes or
 * greater than 168 hours, the Batch service rejects the request with an
 * invalid property value error; if you are calling the REST API directly, the
 * HTTP status code is 400 (Bad Request).
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
 * Enabling inter-node communication limits the maximum size of the pool due to
 * deployment restrictions on the nodes of the pool. This may result in the
 * pool not reaching its desired size. The default value is false.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
 * The virtual network must be in the same region and subscription as the Azure
 * Batch account. The specified subnet should have enough free IP addresses to
 * accommodate the number of nodes in the pool. If the subnet doesn't have
 * enough free IP addresses, the pool will partially allocate compute nodes,
 * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
 * must have the 'Classic Virtual Machine Contributor' Role-Based Access
 * Control (RBAC) role for the specified VNet. The specified subnet must allow
 * communication from the Azure Batch service to be able to schedule tasks on
 * the compute nodes. This can be verified by checking if the specified VNet
 * has any associated Network Security Groups (NSG). If communication to the
 * compute nodes in the specified subnet is denied by an NSG, then the Batch
 * service will set the state of the compute nodes to unusable. For pools
 * created via virtualMachineConfiguration the Batch account must have
 * poolAllocationMode userSubscription in order to use a VNet. If the specified
 * VNet has any associated Network Security Groups (NSG), then a few reserved
 * system ports must be enabled for inbound communication. For pools created
 * with a virtual machine configuration, enable ports 29876 and 29877, as well
 * as port 22 for Linux and port 3389 for Windows. For pools created with a
 * cloud service configuration, enable ports 10100, 20100, and 30100. Also
 * enable outbound connections to Azure Storage on port 443. For more details
 * see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
 * Pool endpoint configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.commandLine]
 * The command line does not run under a shell, and therefore cannot take
 * advantage of shell features such as environment variable expansion. If you
 * want to take advantage of such features, you should invoke the shell in the
 * command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
 * Files listed under this element are located in the task's working directory.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
 * If omitted, the task runs as a non-administrative user unique to the task.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
 * Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
 * The Batch service retries a task if its exit code is nonzero. Note that this
 * value specifically controls the number of retries. The Batch service will
 * try the task once, and may then retry up to this limit. For example, if the
 * maximum retry count is 3, Batch tries the task up to 4 times (one initial
 * try and 3 retries). If the maximum retry count is 0, the Batch service does
 * not retry the task. If the maximum retry count is -1, the Batch service
 * retries the task without limit.
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
 * If true and the start task fails on a compute node, the Batch service
 * retries the start task up to its maximum retry count (maxTaskRetryCount). If
 * the task has still not completed successfully after all retries, then the
 * Batch service marks the compute node unusable, and will not schedule tasks
 * to it. This condition can be detected via the node state and failure info
 * details. If false, the Batch service will not wait for the start task to
 * complete. In this case, other tasks can start executing on the compute node
 * while the start task is still running; and even if the start task fails, new
 * tasks will continue to be scheduled on the node. The default is false.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.certificateReferences]
 * For Windows compute nodes, the Batch service installs the certificates to
 * the specified certificate store and location. For Linux compute nodes, the
 * certificates are stored in a directory inside the task working directory and
 * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
 * query for this location. For certificates with visibility of 'remoteUser', a
 * 'certs' directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.applicationLicenses]
 * The list of application licenses must be a subset of available Batch service
 * application licenses. If a license is requested which is not supported, pool
 * creation will fail.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.userAccounts]
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.metadata] The Batch
 * service does not assign any meaning to metadata; it is solely for the use of
 * user code.
 * @member {array} [jobSpecification.metadata] The Batch service does not
 * assign any meaning to metadata; it is solely for the use of user code.
 * @member {array} [metadata] A list of name-value pairs associated with the
 * schedule as metadata. The Batch service does not assign any meaning to
 * metadata; it is solely for the use of user code.
 */
export interface JobScheduleAddParameter {
    id: string;
    displayName?: string;
    schedule: Schedule;
    jobSpecification: JobSpecification;
    metadata?: MetadataItem[];
}
/**
 * @class
 * Initializes a new instance of the JobSchedulingError class.
 * @constructor
 * @summary An error encountered by the Batch service when scheduling a job.
 *
 * @member {string} category The category of the job scheduling error. Possible
 * values include: 'userError', 'serverError'
 * @member {string} [code] An identifier for the job scheduling error. Codes
 * are invariant and are intended to be consumed programmatically.
 * @member {string} [message] A message describing the job scheduling error,
 * intended to be suitable for display in a user interface.
 * @member {array} [details] A list of additional error details related to the
 * scheduling error.
 */
export interface JobSchedulingError {
    category: string;
    code?: string;
    message?: string;
    details?: NameValuePair[];
}
/**
 * @class
 * Initializes a new instance of the JobExecutionInformation class.
 * @constructor
 * @summary Contains information about the execution of a job in the Azure
 * Batch service.
 *
 * @member {date} startTime The start time of the job. This is the time at
 * which the job was created.
 * @member {date} [endTime] The completion time of the job. This property is
 * set only if the job is in the completed state.
 * @member {string} [poolId] The ID of the pool to which this job is assigned.
 * This element contains the actual pool where the job is assigned. When you
 * get job details from the service, they also contain a poolInfo element,
 * which contains the pool configuration data from when the job was added or
 * updated. That poolInfo element may also contain a poolId element. If it
 * does, the two IDs are the same. If it does not, it means the job ran on an
 * auto pool, and this property contains the ID of that auto pool.
 * @member {object} [schedulingError] Details of any error encountered by the
 * service in starting the job. This property is not set if there was no error
 * starting the job.
 * @member {string} [schedulingError.category] Possible values include:
 * 'userError', 'serverError'
 * @member {string} [schedulingError.code]
 * @member {string} [schedulingError.message]
 * @member {array} [schedulingError.details]
 * @member {string} [terminateReason] A string describing the reason the job
 * ended. This property is set only if the job is in the completed state. If
 * the Batch service terminates the job, it sets the reason as follows:
 * JMComplete - the Job Manager task completed, and killJobOnCompletion was set
 * to true. MaxWallClockTimeExpiry - the job reached its maxWallClockTime
 * constraint. TerminateJobSchedule - the job ran as part of a schedule, and
 * the schedule terminated. AllTasksComplete - the job's onAllTasksComplete
 * attribute is set to terminateJob, and all tasks in the job are complete.
 * TaskFailed - the job's onTaskFailure attribute is set to
 * performExitOptionsJobAction, and a task in the job failed with an exit
 * condition that specified a jobAction of terminateJob. Any other string is a
 * user-defined reason specified in a call to the 'Terminate a job' operation.
 */
export interface JobExecutionInformation {
    startTime: Date;
    endTime?: Date;
    poolId?: string;
    schedulingError?: JobSchedulingError;
    terminateReason?: string;
}
/**
 * @class
 * Initializes a new instance of the CloudJob class.
 * @constructor
 * @summary An Azure Batch job.
 *
 * @member {string} [id] A string that uniquely identifies the job within the
 * account. The ID is case-preserving and case-insensitive (that is, you may
 * not have two IDs within an account that differ only by case).
 * @member {string} [displayName] The display name for the job.
 * @member {boolean} [usesTaskDependencies] Whether tasks in the job can define
 * dependencies on each other. The default is false.
 * @member {string} [url] The URL of the job.
 * @member {string} [eTag] The ETag of the job. This is an opaque string. You
 * can use it to detect whether the job has changed between requests. In
 * particular, you can be pass the ETag when updating a job to specify that
 * your changes should take effect only if nobody else has modified the job in
 * the meantime.
 * @member {date} [lastModified] The last modified time of the job. This is the
 * last time at which the job level data, such as the job state or priority,
 * changed. It does not factor in task-level changes such as adding new tasks
 * or tasks changing state.
 * @member {date} [creationTime] The creation time of the job.
 * @member {string} [state] The current state of the job. Possible values
 * include: 'active', 'disabling', 'disabled', 'enabling', 'terminating',
 * 'completed', 'deleting'
 * @member {date} [stateTransitionTime] The time at which the job entered its
 * current state.
 * @member {string} [previousState] The previous state of the job. This
 * property is not set if the job is in its initial Active state. Possible
 * values include: 'active', 'disabling', 'disabled', 'enabling',
 * 'terminating', 'completed', 'deleting'
 * @member {date} [previousStateTransitionTime] The time at which the job
 * entered its previous state. This property is not set if the job is in its
 * initial Active state.
 * @member {number} [priority] The priority of the job. Priority values can
 * range from -1000 to 1000, with -1000 being the lowest priority and 1000
 * being the highest priority. The default value is 0.
 * @member {object} [constraints] The execution constraints for the job.
 * @member {moment.duration} [constraints.maxWallClockTime] If the job does not
 * complete within the time limit, the Batch service terminates it and any
 * tasks that are still running. In this case, the termination reason will be
 * MaxWallClockTimeExpiry. If this property is not specified, there is no time
 * limit on how long the job may run.
 * @member {number} [constraints.maxTaskRetryCount] Note that this value
 * specifically controls the number of retries. The Batch service will try each
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries a task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * tasks. If the maximum retry count is -1, the Batch service retries tasks
 * without limit. The default value is 0 (no retries).
 * @member {object} [jobManagerTask] Details of a Job Manager task to be
 * launched when the job is started.
 * @member {string} [jobManagerTask.id] The ID can contain any combination of
 * alphanumeric characters including hyphens and underscores and cannot contain
 * more than 64 characters.
 * @member {string} [jobManagerTask.displayName] It need not be unique and can
 * contain any Unicode characters up to a maximum length of 1024.
 * @member {string} [jobManagerTask.commandLine] The command line does not run
 * under a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [jobManagerTask.resourceFiles] Files listed under this
 * element are located in the task's working directory.
 * @member {array} [jobManagerTask.outputFiles] For multi-instance tasks, the
 * files will only be uploaded from the compute node on which the primary task
 * is executed.
 * @member {array} [jobManagerTask.environmentSettings]
 * @member {object} [jobManagerTask.constraints]
 * @member {moment.duration} [jobManagerTask.constraints.maxWallClockTime] If
 * this is not specified, there is no time limit on how long the task may run.
 * @member {moment.duration} [jobManagerTask.constraints.retentionTime] The
 * default is infinite, i.e. the task directory will be retained until the
 * compute node is removed or reimaged.
 * @member {number} [jobManagerTask.constraints.maxTaskRetryCount] Note that
 * this value specifically controls the number of retries. The Batch service
 * will try the task once, and may then retry up to this limit. For example, if
 * the maximum retry count is 3, Batch tries the task up to 4 times (one
 * initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobManagerTask.killJobOnCompletion] If true, when the Job
 * Manager task completes, the Batch service marks the job as complete. If any
 * tasks are still running at this time (other than Job Release), those tasks
 * are terminated. If false, the completion of the Job Manager task does not
 * affect the job status. In this case, you should either use the
 * onAllTasksComplete attribute to terminate the job, or have a client or user
 * terminate the job explicitly. An example of this is if the Job Manager
 * creates a set of tasks but then takes no further role in their execution.
 * The default value is true. If you are using the onAllTasksComplete and
 * onTaskFailure attributes to control job lifetime, and using the Job Manager
 * task only to create the tasks for the job (not to monitor progress), then it
 * is important to set killJobOnCompletion to false.
 * @member {object} [jobManagerTask.userIdentity] If omitted, the task runs as
 * a non-administrative user unique to the task.
 * @member {string} [jobManagerTask.userIdentity.userName] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {object} [jobManagerTask.userIdentity.autoUser] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {string} [jobManagerTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [jobManagerTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean} [jobManagerTask.runExclusive] If true, no other tasks will
 * run on the same compute node for as long as the Job Manager is running. If
 * false, other tasks can run simultaneously with the Job Manager on a compute
 * node. The Job Manager task counts normally against the node's concurrent
 * task limit, so this is only relevant if the node allows multiple concurrent
 * tasks. The default value is true.
 * @member {array} [jobManagerTask.applicationPackageReferences] Application
 * packages are downloaded and deployed to a shared directory, not the task
 * working directory. Therefore, if a referenced package is already on the
 * compute node, and is up to date, then it is not re-downloaded; the existing
 * copy on the compute node is used. If a referenced application package cannot
 * be installed, for example because the package has been deleted or because
 * download failed, the task fails.
 * @member {object} [jobManagerTask.authenticationTokenSettings] If this
 * property is set, the Batch service provides the task with an authentication
 * token which can be used to authenticate Batch service operations without
 * requiring an account access key. The token is provided via the
 * AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations that the
 * task can carry out using the token depend on the settings. For example, a
 * task can request job permissions in order to add other tasks to the job, or
 * check the status of the job or of other tasks under the job.
 * @member {array} [jobManagerTask.authenticationTokenSettings.access] The
 * authentication token grants access to a limited set of Batch service
 * operations. Currently the only supported value for the access property is
 * 'job', which grants access to all operations related to the job which
 * contains the task.
 * @member {boolean} [jobManagerTask.allowLowPriorityNode] The default value is
 * false.
 * @member {object} [jobPreparationTask] The Job Preparation task. The Job
 * Preparation task is a special task run on each node before any other task of
 * the job.
 * @member {string} [jobPreparationTask.id] The ID can contain any combination
 * of alphanumeric characters including hyphens and underscores and cannot
 * contain more than 64 characters. If you do not specify this property, the
 * Batch service assigns a default value of 'jobpreparation'. No other task in
 * the job can have the same ID as the Job Preparation task. If you try to
 * submit a task with the same id, the Batch service rejects the request with
 * error code TaskIdSameAsJobPreparationTask; if you are calling the REST API
 * directly, the HTTP status code is 409 (Conflict).
 * @member {string} [jobPreparationTask.commandLine] The command line does not
 * run under a shell, and therefore cannot take advantage of shell features
 * such as environment variable expansion. If you want to take advantage of
 * such features, you should invoke the shell in the command line, for example
 * using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [jobPreparationTask.resourceFiles] Files listed under this
 * element are located in the task's working directory.
 * @member {array} [jobPreparationTask.environmentSettings]
 * @member {object} [jobPreparationTask.constraints]
 * @member {moment.duration} [jobPreparationTask.constraints.maxWallClockTime]
 * If this is not specified, there is no time limit on how long the task may
 * run.
 * @member {moment.duration} [jobPreparationTask.constraints.retentionTime] The
 * default is infinite, i.e. the task directory will be retained until the
 * compute node is removed or reimaged.
 * @member {number} [jobPreparationTask.constraints.maxTaskRetryCount] Note
 * that this value specifically controls the number of retries. The Batch
 * service will try the task once, and may then retry up to this limit. For
 * example, if the maximum retry count is 3, Batch tries the task up to 4 times
 * (one initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobPreparationTask.waitForSuccess] If true and the Job
 * Preparation task fails on a compute node, the Batch service retries the Job
 * Preparation task up to its maximum retry count (as specified in the
 * constraints element). If the task has still not completed successfully after
 * all retries, then the Batch service will not schedule tasks of the job to
 * the compute node. The compute node remains active and eligible to run tasks
 * of other jobs. If false, the Batch service will not wait for the Job
 * Preparation task to complete. In this case, other tasks of the job can start
 * executing on the compute node while the Job Preparation task is still
 * running; and even if the Job Preparation task fails, new tasks will continue
 * to be scheduled on the node. The default value is true.
 * @member {object} [jobPreparationTask.userIdentity] If omitted, the task runs
 * as a non-administrative user unique to the task on Windows nodes, or a a
 * non-administrative user unique to the pool on Linux nodes.
 * @member {string} [jobPreparationTask.userIdentity.userName] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {object} [jobPreparationTask.userIdentity.autoUser] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {string} [jobPreparationTask.userIdentity.autoUser.scope] Values
 * are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [jobPreparationTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean} [jobPreparationTask.rerunOnNodeRebootAfterSuccess] The Job
 * Preparation task is always rerun if a compute node is reimaged, or if the
 * Job Preparation task did not complete (e.g. because the reboot occurred
 * while the task was running). Therefore, you should always write a Job
 * Preparation task to be idempotent and to behave correctly if run multiple
 * times. The default value is true.
 * @member {object} [jobReleaseTask] The Job Release task. The Job Release task
 * is a special task run at the end of the job on each node that has run any
 * other task of the job.
 * @member {string} [jobReleaseTask.id] The ID can contain any combination of
 * alphanumeric characters including hyphens and underscores and cannot contain
 * more than 64 characters. If you do not specify this property, the Batch
 * service assigns a default value of 'jobrelease'. No other task in the job
 * can have the same ID as the Job Release task. If you try to submit a task
 * with the same id, the Batch service rejects the request with error code
 * TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the
 * HTTP status code is 409 (Conflict).
 * @member {string} [jobReleaseTask.commandLine] The command line does not run
 * under a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [jobReleaseTask.resourceFiles] Files listed under this
 * element are located in the task's working directory.
 * @member {array} [jobReleaseTask.environmentSettings]
 * @member {moment.duration} [jobReleaseTask.maxWallClockTime]
 * @member {moment.duration} [jobReleaseTask.retentionTime] The default is
 * infinite, i.e. the task directory will be retained until the compute node is
 * removed or reimaged.
 * @member {object} [jobReleaseTask.userIdentity] If omitted, the task runs as
 * a non-administrative user unique to the task.
 * @member {string} [jobReleaseTask.userIdentity.userName] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {object} [jobReleaseTask.userIdentity.autoUser] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {string} [jobReleaseTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [jobReleaseTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {array} [commonEnvironmentSettings] The list of common environment
 * variable settings. These environment variables are set for all tasks in the
 * job (including the Job Manager, Job Preparation and Job Release tasks).
 * Individual tasks can override an environment setting specified here by
 * specifying the same setting name with a different value.
 * @member {object} [poolInfo] The pool settings associated with the job.
 * @member {string} [poolInfo.poolId] You must ensure that the pool referenced
 * by this property exists. If the pool does not exist at the time the Batch
 * service tries to schedule a job, no tasks for the job will run until you
 * create a pool with that id. Note that the Batch service will not reject the
 * job request; it will simply not run tasks until the pool exists. You must
 * specify either the pool ID or the auto pool specification, but not both.
 * @member {object} [poolInfo.autoPoolSpecification] If auto pool creation
 * fails, the Batch service moves the job to a completed state, and the pool
 * creation error is set in the job's scheduling error property. The Batch
 * service manages the lifetime (both creation and, unless keepAlive is
 * specified, deletion) of the auto pool. Any user actions that affect the
 * lifetime of the auto pool while the job is active will result in unexpected
 * behavior. You must specify either the pool ID or the auto pool
 * specification, but not both.
 * @member {string} [poolInfo.autoPoolSpecification.autoPoolIdPrefix] The Batch
 * service assigns each auto pool a unique identifier on creation. To
 * distinguish between pools created for different purposes, you can specify
 * this element to add a prefix to the ID that is assigned. The prefix can be
 * up to 20 characters long.
 * @member {string} [poolInfo.autoPoolSpecification.poolLifetimeOption] When
 * the pool lifetime is jobSchedule the pool exists for the lifetime of the job
 * schedule. The Batch Service creates the pool when it creates the first job
 * on the schedule. You may apply this option only to job schedules, not to
 * jobs. When the pool lifetime is job the pool exists for the lifetime of the
 * job to which it is dedicated. The Batch service creates the pool when it
 * creates the job. If the 'job' option is applied to a job schedule, the Batch
 * service creates a new auto pool for every job created on the schedule.
 * Possible values include: 'jobSchedule', 'job'
 * @member {boolean} [poolInfo.autoPoolSpecification.keepAlive] If false, the
 * Batch service deletes the pool once its lifetime (as determined by the
 * poolLifetimeOption setting) expires; that is, when the job or job schedule
 * completes. If true, the Batch service does not delete the pool
 * automatically. It is up to the user to delete auto pools created with this
 * option.
 * @member {object} [poolInfo.autoPoolSpecification.pool]
 * @member {string} [poolInfo.autoPoolSpecification.pool.displayName] The
 * display name need not be unique and can contain any Unicode characters up to
 * a maximum length of 1024.
 * @member {string} [poolInfo.autoPoolSpecification.pool.vmSize] For
 * information about available sizes of virtual machines for Cloud Services
 * pools (pools created with cloudServiceConfiguration), see Sizes for Cloud
 * Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration] This
 * property must be specified if the pool needs to be created with Azure PaaS
 * VMs. This property and virtualMachineConfiguration are mutually exclusive
 * and one of the properties must be specified. If neither is specified then
 * the Batch service returns an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request). This property cannot be
 * specified if the Batch account was created with its poolAllocationMode
 * property set to 'UserSubscription'.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily]
 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2
 * SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4,
 * equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows
 * Server 2016. For more information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
 * The default value is * which specifies the latest operating system version
 * for the specified OS family.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
 * This may differ from targetOSVersion if the pool state is Upgrading. In this
 * case some virtual machines may be on the targetOSVersion and some may be on
 * the currentOSVersion during the upgrade process. Once all virtual machines
 * have upgraded, currentOSVersion is updated to be the same as
 * targetOSVersion.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration] This
 * property must be specified if the pool needs to be created with Azure IaaS
 * VMs. This property and cloudServiceConfiguration are mutually exclusive and
 * one of the properties must be specified. If neither is specified then the
 * Batch service returns an error; if you are calling the REST API directly,
 * the HTTP status code is 400 (Bad Request).
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
 * This property and osDisk are mutually exclusive and one of the properties
 * must be specified.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
 * For example, Canonical or MicrosoftWindowsServer.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
 * For example, UbuntuServer or WindowsServer.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
 * For example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
 * A value of 'latest' can be specified to select the latest version of an
 * image. If omitted, the default is 'latest'.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
 * This property can be specified only if the Batch account was created with
 * its poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris]
 * All the VHDs must be identical and must reside in an Azure Storage account
 * within the same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
 * Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId]
 * The Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems. You must specify a node agent SKU
 * which matches the selected image reference. To get the list of supported
 * node agent SKUs along with their list of verified image references, see the
 * 'List supported node agent SKUs' operation.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
 * This property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * If omitted, the default value is true.
 * @member {number} [poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
 * default value is 1. The maximum value of this setting depends on the size of
 * the compute nodes in the pool (the vmSize setting).
 * @member {object} [poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType]
 * Possible values include: 'spread', 'pack'
 * @member {moment.duration}
 * [poolInfo.autoPoolSpecification.pool.resizeTimeout] This timeout applies
 * only to manual scaling; it has no effect when enableAutoScale is set to
 * true. The default value is 15 minutes. The minimum value is 5 minutes. If
 * you specify a value less than 5 minutes, the Batch service rejects the
 * request with an error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request).
 * @member {number} [poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {number}
 * [poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes] This property
 * must not be specified if enableAutoScale is set to true. If enableAutoScale
 * is set to false, then you must set either targetDedicatedNodes,
 * targetLowPriorityNodes, or both.
 * @member {boolean} [poolInfo.autoPoolSpecification.pool.enableAutoScale] If
 * false, at least one of targetDedicateNodes and targetLowPriorityNodes must
 * be specified. If true, the autoScaleFormula element is required. The pool
 * automatically resizes according to the formula. The default value is false.
 * @member {string} [poolInfo.autoPoolSpecification.pool.autoScaleFormula] This
 * property must not be specified if enableAutoScale is set to false. It is
 * required if enableAutoScale is set to true. The formula is checked for
 * validity before the pool is created. If the formula is not valid, the Batch
 * service rejects the request with detailed error information.
 * @member {moment.duration}
 * [poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval] The
 * default value is 15 minutes. The minimum and maximum value are 5 minutes and
 * 168 hours respectively. If you specify a value less than 5 minutes or
 * greater than 168 hours, the Batch service rejects the request with an
 * invalid property value error; if you are calling the REST API directly, the
 * HTTP status code is 400 (Bad Request).
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication] Enabling
 * inter-node communication limits the maximum size of the pool due to
 * deployment restrictions on the nodes of the pool. This may result in the
 * pool not reaching its desired size. The default value is false.
 * @member {object} [poolInfo.autoPoolSpecification.pool.networkConfiguration]
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId] The
 * virtual network must be in the same region and subscription as the Azure
 * Batch account. The specified subnet should have enough free IP addresses to
 * accommodate the number of nodes in the pool. If the subnet doesn't have
 * enough free IP addresses, the pool will partially allocate compute nodes,
 * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
 * must have the 'Classic Virtual Machine Contributor' Role-Based Access
 * Control (RBAC) role for the specified VNet. The specified subnet must allow
 * communication from the Azure Batch service to be able to schedule tasks on
 * the compute nodes. This can be verified by checking if the specified VNet
 * has any associated Network Security Groups (NSG). If communication to the
 * compute nodes in the specified subnet is denied by an NSG, then the Batch
 * service will set the state of the compute nodes to unusable. For pools
 * created via virtualMachineConfiguration the Batch account must have
 * poolAllocationMode userSubscription in order to use a VNet. If the specified
 * VNet has any associated Network Security Groups (NSG), then a few reserved
 * system ports must be enabled for inbound communication. For pools created
 * with a virtual machine configuration, enable ports 29876 and 29877, as well
 * as port 22 for Linux and port 3389 for Windows. For pools created with a
 * cloud service configuration, enable ports 10100, 20100, and 30100. Also
 * enable outbound connections to Azure Storage on port 443. For more details
 * see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
 * Pool endpoint configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object} [poolInfo.autoPoolSpecification.pool.startTask]
 * @member {string} [poolInfo.autoPoolSpecification.pool.startTask.commandLine]
 * The command line does not run under a shell, and therefore cannot take
 * advantage of shell features such as environment variable expansion. If you
 * want to take advantage of such features, you should invoke the shell in the
 * command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.startTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity] If omitted, the
 * task runs as a non-administrative user unique to the task.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
 * Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {number}
 * [poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount] The Batch
 * service retries a task if its exit code is nonzero. Note that this value
 * specifically controls the number of retries. The Batch service will try the
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * the task. If the maximum retry count is -1, the Batch service retries the
 * task without limit.
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess] If true and
 * the start task fails on a compute node, the Batch service retries the start
 * task up to its maximum retry count (maxTaskRetryCount). If the task has
 * still not completed successfully after all retries, then the Batch service
 * marks the compute node unusable, and will not schedule tasks to it. This
 * condition can be detected via the node state and failure info details. If
 * false, the Batch service will not wait for the start task to complete. In
 * this case, other tasks can start executing on the compute node while the
 * start task is still running; and even if the start task fails, new tasks
 * will continue to be scheduled on the node. The default is false.
 * @member {array} [poolInfo.autoPoolSpecification.pool.certificateReferences]
 * For Windows compute nodes, the Batch service installs the certificates to
 * the specified certificate store and location. For Linux compute nodes, the
 * certificates are stored in a directory inside the task working directory and
 * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
 * query for this location. For certificates with visibility of 'remoteUser', a
 * 'certs' directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
 * @member {array} [poolInfo.autoPoolSpecification.pool.applicationLicenses]
 * The list of application licenses must be a subset of available Batch service
 * application licenses. If a license is requested which is not supported, pool
 * creation will fail.
 * @member {array} [poolInfo.autoPoolSpecification.pool.userAccounts]
 * @member {array} [poolInfo.autoPoolSpecification.pool.metadata] The Batch
 * service does not assign any meaning to metadata; it is solely for the use of
 * user code.
 * @member {string} [onAllTasksComplete] The action the Batch service should
 * take when all tasks in the job are in the completed state. noAction - do
 * nothing. The job remains active unless terminated or disabled by some other
 * means. terminateJob - terminate the job. The job's terminateReason is set to
 * 'AllTasksComplete'. The default is noAction. Possible values include:
 * 'noAction', 'terminateJob'
 * @member {string} [onTaskFailure] The action the Batch service should take
 * when any task in the job fails. A task is considered to have failed if has a
 * failureInfo. A failureInfo is set if the task completes with a non-zero exit
 * code after exhausting its retry count, or if there was an error starting the
 * task, for example due to a resource file download error. noAction - do
 * nothing. performExitOptionsJobAction - take the action associated with the
 * task exit condition in the task's exitConditions collection. (This may still
 * result in no action being taken, if that is what the task specifies.) The
 * default is noAction. Possible values include: 'noAction',
 * 'performExitOptionsJobAction'
 * @member {array} [metadata] A list of name-value pairs associated with the
 * job as metadata. The Batch service does not assign any meaning to metadata;
 * it is solely for the use of user code.
 * @member {object} [executionInfo] The execution information for the job.
 * @member {date} [executionInfo.startTime] This is the time at which the job
 * was created.
 * @member {date} [executionInfo.endTime] This property is set only if the job
 * is in the completed state.
 * @member {string} [executionInfo.poolId] This element contains the actual
 * pool where the job is assigned. When you get job details from the service,
 * they also contain a poolInfo element, which contains the pool configuration
 * data from when the job was added or updated. That poolInfo element may also
 * contain a poolId element. If it does, the two IDs are the same. If it does
 * not, it means the job ran on an auto pool, and this property contains the ID
 * of that auto pool.
 * @member {object} [executionInfo.schedulingError] This property is not set if
 * there was no error starting the job.
 * @member {string} [executionInfo.schedulingError.category] Possible values
 * include: 'userError', 'serverError'
 * @member {string} [executionInfo.schedulingError.code]
 * @member {string} [executionInfo.schedulingError.message]
 * @member {array} [executionInfo.schedulingError.details]
 * @member {string} [executionInfo.terminateReason] This property is set only
 * if the job is in the completed state. If the Batch service terminates the
 * job, it sets the reason as follows: JMComplete - the Job Manager task
 * completed, and killJobOnCompletion was set to true. MaxWallClockTimeExpiry -
 * the job reached its maxWallClockTime constraint. TerminateJobSchedule - the
 * job ran as part of a schedule, and the schedule terminated. AllTasksComplete
 * - the job's onAllTasksComplete attribute is set to terminateJob, and all
 * tasks in the job are complete. TaskFailed - the job's onTaskFailure
 * attribute is set to performExitOptionsJobAction, and a task in the job
 * failed with an exit condition that specified a jobAction of terminateJob.
 * Any other string is a user-defined reason specified in a call to the
 * 'Terminate a job' operation.
 * @member {object} [stats] Resource usage statistics for the entire lifetime
 * of the job.
 * @member {string} [stats.url]
 * @member {date} [stats.startTime]
 * @member {date} [stats.lastUpdateTime]
 * @member {moment.duration} [stats.userCPUTime]
 * @member {moment.duration} [stats.kernelCPUTime]
 * @member {moment.duration} [stats.wallClockTime] The wall clock time is the
 * elapsed time from when the task started running on a compute node to when it
 * finished (or to the last time the statistics were updated, if the task had
 * not finished by then). If a task was retried, this includes the wall clock
 * time of all the task retries.
 * @member {number} [stats.readIOps]
 * @member {number} [stats.writeIOps]
 * @member {number} [stats.readIOGiB]
 * @member {number} [stats.writeIOGiB]
 * @member {number} [stats.numSucceededTasks] A task completes successfully if
 * it returns exit code 0.
 * @member {number} [stats.numFailedTasks] A task fails if it exhausts its
 * maximum retry count without returning exit code 0.
 * @member {number} [stats.numTaskRetries]
 * @member {moment.duration} [stats.waitTime] The wait time for a task is
 * defined as the elapsed time between the creation of the task and the start
 * of task execution. (If the task is retried due to failures, the wait time is
 * the time to the most recent task execution.) This value is only reported in
 * the account lifetime statistics; it is not included in the job statistics.
 */
export interface CloudJob {
    id?: string;
    displayName?: string;
    usesTaskDependencies?: boolean;
    url?: string;
    eTag?: string;
    lastModified?: Date;
    creationTime?: Date;
    state?: string;
    stateTransitionTime?: Date;
    previousState?: string;
    previousStateTransitionTime?: Date;
    priority?: number;
    constraints?: JobConstraints;
    jobManagerTask?: JobManagerTask;
    jobPreparationTask?: JobPreparationTask;
    jobReleaseTask?: JobReleaseTask;
    commonEnvironmentSettings?: EnvironmentSetting[];
    poolInfo?: PoolInformation;
    onAllTasksComplete?: string;
    onTaskFailure?: string;
    metadata?: MetadataItem[];
    executionInfo?: JobExecutionInformation;
    stats?: JobStatistics;
}
/**
 * @class
 * Initializes a new instance of the JobAddParameter class.
 * @constructor
 * @summary An Azure Batch job to add.
 *
 * @member {string} id A string that uniquely identifies the job within the
 * account. The ID can contain any combination of alphanumeric characters
 * including hyphens and underscores, and cannot contain more than 64
 * characters. The ID is case-preserving and case-insensitive (that is, you may
 * not have two IDs within an account that differ only by case).
 * @member {string} [displayName] The display name for the job. The display
 * name need not be unique and can contain any Unicode characters up to a
 * maximum length of 1024.
 * @member {number} [priority] The priority of the job. Priority values can
 * range from -1000 to 1000, with -1000 being the lowest priority and 1000
 * being the highest priority. The default value is 0.
 * @member {object} [constraints] The execution constraints for the job.
 * @member {moment.duration} [constraints.maxWallClockTime] If the job does not
 * complete within the time limit, the Batch service terminates it and any
 * tasks that are still running. In this case, the termination reason will be
 * MaxWallClockTimeExpiry. If this property is not specified, there is no time
 * limit on how long the job may run.
 * @member {number} [constraints.maxTaskRetryCount] Note that this value
 * specifically controls the number of retries. The Batch service will try each
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries a task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * tasks. If the maximum retry count is -1, the Batch service retries tasks
 * without limit. The default value is 0 (no retries).
 * @member {object} [jobManagerTask] Details of a Job Manager task to be
 * launched when the job is started. If the job does not specify a Job Manager
 * task, the user must explicitly add tasks to the job. If the job does specify
 * a Job Manager task, the Batch service creates the Job Manager task when the
 * job is created, and will try to schedule the Job Manager task before
 * scheduling other tasks in the job. The Job Manager task's typical purpose is
 * to control and/or monitor job execution, for example by deciding what
 * additional tasks to run, determining when the work is complete, etc.
 * (However, a Job Manager task is not restricted to these activities - it is a
 * fully-fledged task in the system and perform whatever actions are required
 * for the job.) For example, a Job Manager task might download a file
 * specified as a parameter, analyze the contents of that file and submit
 * additional tasks based on those contents.
 * @member {string} [jobManagerTask.id] The ID can contain any combination of
 * alphanumeric characters including hyphens and underscores and cannot contain
 * more than 64 characters.
 * @member {string} [jobManagerTask.displayName] It need not be unique and can
 * contain any Unicode characters up to a maximum length of 1024.
 * @member {string} [jobManagerTask.commandLine] The command line does not run
 * under a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [jobManagerTask.resourceFiles] Files listed under this
 * element are located in the task's working directory.
 * @member {array} [jobManagerTask.outputFiles] For multi-instance tasks, the
 * files will only be uploaded from the compute node on which the primary task
 * is executed.
 * @member {array} [jobManagerTask.environmentSettings]
 * @member {object} [jobManagerTask.constraints]
 * @member {moment.duration} [jobManagerTask.constraints.maxWallClockTime] If
 * this is not specified, there is no time limit on how long the task may run.
 * @member {moment.duration} [jobManagerTask.constraints.retentionTime] The
 * default is infinite, i.e. the task directory will be retained until the
 * compute node is removed or reimaged.
 * @member {number} [jobManagerTask.constraints.maxTaskRetryCount] Note that
 * this value specifically controls the number of retries. The Batch service
 * will try the task once, and may then retry up to this limit. For example, if
 * the maximum retry count is 3, Batch tries the task up to 4 times (one
 * initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobManagerTask.killJobOnCompletion] If true, when the Job
 * Manager task completes, the Batch service marks the job as complete. If any
 * tasks are still running at this time (other than Job Release), those tasks
 * are terminated. If false, the completion of the Job Manager task does not
 * affect the job status. In this case, you should either use the
 * onAllTasksComplete attribute to terminate the job, or have a client or user
 * terminate the job explicitly. An example of this is if the Job Manager
 * creates a set of tasks but then takes no further role in their execution.
 * The default value is true. If you are using the onAllTasksComplete and
 * onTaskFailure attributes to control job lifetime, and using the Job Manager
 * task only to create the tasks for the job (not to monitor progress), then it
 * is important to set killJobOnCompletion to false.
 * @member {object} [jobManagerTask.userIdentity] If omitted, the task runs as
 * a non-administrative user unique to the task.
 * @member {string} [jobManagerTask.userIdentity.userName] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {object} [jobManagerTask.userIdentity.autoUser] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {string} [jobManagerTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [jobManagerTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean} [jobManagerTask.runExclusive] If true, no other tasks will
 * run on the same compute node for as long as the Job Manager is running. If
 * false, other tasks can run simultaneously with the Job Manager on a compute
 * node. The Job Manager task counts normally against the node's concurrent
 * task limit, so this is only relevant if the node allows multiple concurrent
 * tasks. The default value is true.
 * @member {array} [jobManagerTask.applicationPackageReferences] Application
 * packages are downloaded and deployed to a shared directory, not the task
 * working directory. Therefore, if a referenced package is already on the
 * compute node, and is up to date, then it is not re-downloaded; the existing
 * copy on the compute node is used. If a referenced application package cannot
 * be installed, for example because the package has been deleted or because
 * download failed, the task fails.
 * @member {object} [jobManagerTask.authenticationTokenSettings] If this
 * property is set, the Batch service provides the task with an authentication
 * token which can be used to authenticate Batch service operations without
 * requiring an account access key. The token is provided via the
 * AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations that the
 * task can carry out using the token depend on the settings. For example, a
 * task can request job permissions in order to add other tasks to the job, or
 * check the status of the job or of other tasks under the job.
 * @member {array} [jobManagerTask.authenticationTokenSettings.access] The
 * authentication token grants access to a limited set of Batch service
 * operations. Currently the only supported value for the access property is
 * 'job', which grants access to all operations related to the job which
 * contains the task.
 * @member {boolean} [jobManagerTask.allowLowPriorityNode] The default value is
 * false.
 * @member {object} [jobPreparationTask] The Job Preparation task. If a job has
 * a Job Preparation task, the Batch service will run the Job Preparation task
 * on a compute node before starting any tasks of that job on that compute
 * node.
 * @member {string} [jobPreparationTask.id] The ID can contain any combination
 * of alphanumeric characters including hyphens and underscores and cannot
 * contain more than 64 characters. If you do not specify this property, the
 * Batch service assigns a default value of 'jobpreparation'. No other task in
 * the job can have the same ID as the Job Preparation task. If you try to
 * submit a task with the same id, the Batch service rejects the request with
 * error code TaskIdSameAsJobPreparationTask; if you are calling the REST API
 * directly, the HTTP status code is 409 (Conflict).
 * @member {string} [jobPreparationTask.commandLine] The command line does not
 * run under a shell, and therefore cannot take advantage of shell features
 * such as environment variable expansion. If you want to take advantage of
 * such features, you should invoke the shell in the command line, for example
 * using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [jobPreparationTask.resourceFiles] Files listed under this
 * element are located in the task's working directory.
 * @member {array} [jobPreparationTask.environmentSettings]
 * @member {object} [jobPreparationTask.constraints]
 * @member {moment.duration} [jobPreparationTask.constraints.maxWallClockTime]
 * If this is not specified, there is no time limit on how long the task may
 * run.
 * @member {moment.duration} [jobPreparationTask.constraints.retentionTime] The
 * default is infinite, i.e. the task directory will be retained until the
 * compute node is removed or reimaged.
 * @member {number} [jobPreparationTask.constraints.maxTaskRetryCount] Note
 * that this value specifically controls the number of retries. The Batch
 * service will try the task once, and may then retry up to this limit. For
 * example, if the maximum retry count is 3, Batch tries the task up to 4 times
 * (one initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobPreparationTask.waitForSuccess] If true and the Job
 * Preparation task fails on a compute node, the Batch service retries the Job
 * Preparation task up to its maximum retry count (as specified in the
 * constraints element). If the task has still not completed successfully after
 * all retries, then the Batch service will not schedule tasks of the job to
 * the compute node. The compute node remains active and eligible to run tasks
 * of other jobs. If false, the Batch service will not wait for the Job
 * Preparation task to complete. In this case, other tasks of the job can start
 * executing on the compute node while the Job Preparation task is still
 * running; and even if the Job Preparation task fails, new tasks will continue
 * to be scheduled on the node. The default value is true.
 * @member {object} [jobPreparationTask.userIdentity] If omitted, the task runs
 * as a non-administrative user unique to the task on Windows nodes, or a a
 * non-administrative user unique to the pool on Linux nodes.
 * @member {string} [jobPreparationTask.userIdentity.userName] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {object} [jobPreparationTask.userIdentity.autoUser] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {string} [jobPreparationTask.userIdentity.autoUser.scope] Values
 * are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [jobPreparationTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean} [jobPreparationTask.rerunOnNodeRebootAfterSuccess] The Job
 * Preparation task is always rerun if a compute node is reimaged, or if the
 * Job Preparation task did not complete (e.g. because the reboot occurred
 * while the task was running). Therefore, you should always write a Job
 * Preparation task to be idempotent and to behave correctly if run multiple
 * times. The default value is true.
 * @member {object} [jobReleaseTask] The Job Release task. A Job Release task
 * cannot be specified without also specifying a Job Preparation task for the
 * job. The Batch service runs the Job Release task on the compute nodes that
 * have run the Job Preparation task. The primary purpose of the Job Release
 * task is to undo changes to compute nodes made by the Job Preparation task.
 * Example activities include deleting local files, or shutting down services
 * that were started as part of job preparation.
 * @member {string} [jobReleaseTask.id] The ID can contain any combination of
 * alphanumeric characters including hyphens and underscores and cannot contain
 * more than 64 characters. If you do not specify this property, the Batch
 * service assigns a default value of 'jobrelease'. No other task in the job
 * can have the same ID as the Job Release task. If you try to submit a task
 * with the same id, the Batch service rejects the request with error code
 * TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the
 * HTTP status code is 409 (Conflict).
 * @member {string} [jobReleaseTask.commandLine] The command line does not run
 * under a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [jobReleaseTask.resourceFiles] Files listed under this
 * element are located in the task's working directory.
 * @member {array} [jobReleaseTask.environmentSettings]
 * @member {moment.duration} [jobReleaseTask.maxWallClockTime]
 * @member {moment.duration} [jobReleaseTask.retentionTime] The default is
 * infinite, i.e. the task directory will be retained until the compute node is
 * removed or reimaged.
 * @member {object} [jobReleaseTask.userIdentity] If omitted, the task runs as
 * a non-administrative user unique to the task.
 * @member {string} [jobReleaseTask.userIdentity.userName] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {object} [jobReleaseTask.userIdentity.autoUser] The userName and
 * autoUser properties are mutually exclusive; you must specify one but not
 * both.
 * @member {string} [jobReleaseTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [jobReleaseTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {array} [commonEnvironmentSettings] The list of common environment
 * variable settings. These environment variables are set for all tasks in the
 * job (including the Job Manager, Job Preparation and Job Release tasks).
 * Individual tasks can override an environment setting specified here by
 * specifying the same setting name with a different value.
 * @member {object} poolInfo The pool on which the Batch service runs the job's
 * tasks.
 * @member {string} [poolInfo.poolId] You must ensure that the pool referenced
 * by this property exists. If the pool does not exist at the time the Batch
 * service tries to schedule a job, no tasks for the job will run until you
 * create a pool with that id. Note that the Batch service will not reject the
 * job request; it will simply not run tasks until the pool exists. You must
 * specify either the pool ID or the auto pool specification, but not both.
 * @member {object} [poolInfo.autoPoolSpecification] If auto pool creation
 * fails, the Batch service moves the job to a completed state, and the pool
 * creation error is set in the job's scheduling error property. The Batch
 * service manages the lifetime (both creation and, unless keepAlive is
 * specified, deletion) of the auto pool. Any user actions that affect the
 * lifetime of the auto pool while the job is active will result in unexpected
 * behavior. You must specify either the pool ID or the auto pool
 * specification, but not both.
 * @member {string} [poolInfo.autoPoolSpecification.autoPoolIdPrefix] The Batch
 * service assigns each auto pool a unique identifier on creation. To
 * distinguish between pools created for different purposes, you can specify
 * this element to add a prefix to the ID that is assigned. The prefix can be
 * up to 20 characters long.
 * @member {string} [poolInfo.autoPoolSpecification.poolLifetimeOption] When
 * the pool lifetime is jobSchedule the pool exists for the lifetime of the job
 * schedule. The Batch Service creates the pool when it creates the first job
 * on the schedule. You may apply this option only to job schedules, not to
 * jobs. When the pool lifetime is job the pool exists for the lifetime of the
 * job to which it is dedicated. The Batch service creates the pool when it
 * creates the job. If the 'job' option is applied to a job schedule, the Batch
 * service creates a new auto pool for every job created on the schedule.
 * Possible values include: 'jobSchedule', 'job'
 * @member {boolean} [poolInfo.autoPoolSpecification.keepAlive] If false, the
 * Batch service deletes the pool once its lifetime (as determined by the
 * poolLifetimeOption setting) expires; that is, when the job or job schedule
 * completes. If true, the Batch service does not delete the pool
 * automatically. It is up to the user to delete auto pools created with this
 * option.
 * @member {object} [poolInfo.autoPoolSpecification.pool]
 * @member {string} [poolInfo.autoPoolSpecification.pool.displayName] The
 * display name need not be unique and can contain any Unicode characters up to
 * a maximum length of 1024.
 * @member {string} [poolInfo.autoPoolSpecification.pool.vmSize] For
 * information about available sizes of virtual machines for Cloud Services
 * pools (pools created with cloudServiceConfiguration), see Sizes for Cloud
 * Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration] This
 * property must be specified if the pool needs to be created with Azure PaaS
 * VMs. This property and virtualMachineConfiguration are mutually exclusive
 * and one of the properties must be specified. If neither is specified then
 * the Batch service returns an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request). This property cannot be
 * specified if the Batch account was created with its poolAllocationMode
 * property set to 'UserSubscription'.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily]
 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2
 * SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4,
 * equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows
 * Server 2016. For more information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
 * The default value is * which specifies the latest operating system version
 * for the specified OS family.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
 * This may differ from targetOSVersion if the pool state is Upgrading. In this
 * case some virtual machines may be on the targetOSVersion and some may be on
 * the currentOSVersion during the upgrade process. Once all virtual machines
 * have upgraded, currentOSVersion is updated to be the same as
 * targetOSVersion.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration] This
 * property must be specified if the pool needs to be created with Azure IaaS
 * VMs. This property and cloudServiceConfiguration are mutually exclusive and
 * one of the properties must be specified. If neither is specified then the
 * Batch service returns an error; if you are calling the REST API directly,
 * the HTTP status code is 400 (Bad Request).
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
 * This property and osDisk are mutually exclusive and one of the properties
 * must be specified.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
 * For example, Canonical or MicrosoftWindowsServer.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
 * For example, UbuntuServer or WindowsServer.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
 * For example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
 * A value of 'latest' can be specified to select the latest version of an
 * image. If omitted, the default is 'latest'.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
 * This property can be specified only if the Batch account was created with
 * its poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris]
 * All the VHDs must be identical and must reside in an Azure Storage account
 * within the same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
 * Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId]
 * The Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems. You must specify a node agent SKU
 * which matches the selected image reference. To get the list of supported
 * node agent SKUs along with their list of verified image references, see the
 * 'List supported node agent SKUs' operation.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
 * This property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * If omitted, the default value is true.
 * @member {number} [poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
 * default value is 1. The maximum value of this setting depends on the size of
 * the compute nodes in the pool (the vmSize setting).
 * @member {object} [poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType]
 * Possible values include: 'spread', 'pack'
 * @member {moment.duration}
 * [poolInfo.autoPoolSpecification.pool.resizeTimeout] This timeout applies
 * only to manual scaling; it has no effect when enableAutoScale is set to
 * true. The default value is 15 minutes. The minimum value is 5 minutes. If
 * you specify a value less than 5 minutes, the Batch service rejects the
 * request with an error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request).
 * @member {number} [poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {number}
 * [poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes] This property
 * must not be specified if enableAutoScale is set to true. If enableAutoScale
 * is set to false, then you must set either targetDedicatedNodes,
 * targetLowPriorityNodes, or both.
 * @member {boolean} [poolInfo.autoPoolSpecification.pool.enableAutoScale] If
 * false, at least one of targetDedicateNodes and targetLowPriorityNodes must
 * be specified. If true, the autoScaleFormula element is required. The pool
 * automatically resizes according to the formula. The default value is false.
 * @member {string} [poolInfo.autoPoolSpecification.pool.autoScaleFormula] This
 * property must not be specified if enableAutoScale is set to false. It is
 * required if enableAutoScale is set to true. The formula is checked for
 * validity before the pool is created. If the formula is not valid, the Batch
 * service rejects the request with detailed error information.
 * @member {moment.duration}
 * [poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval] The
 * default value is 15 minutes. The minimum and maximum value are 5 minutes and
 * 168 hours respectively. If you specify a value less than 5 minutes or
 * greater than 168 hours, the Batch service rejects the request with an
 * invalid property value error; if you are calling the REST API directly, the
 * HTTP status code is 400 (Bad Request).
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication] Enabling
 * inter-node communication limits the maximum size of the pool due to
 * deployment restrictions on the nodes of the pool. This may result in the
 * pool not reaching its desired size. The default value is false.
 * @member {object} [poolInfo.autoPoolSpecification.pool.networkConfiguration]
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId] The
 * virtual network must be in the same region and subscription as the Azure
 * Batch account. The specified subnet should have enough free IP addresses to
 * accommodate the number of nodes in the pool. If the subnet doesn't have
 * enough free IP addresses, the pool will partially allocate compute nodes,
 * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
 * must have the 'Classic Virtual Machine Contributor' Role-Based Access
 * Control (RBAC) role for the specified VNet. The specified subnet must allow
 * communication from the Azure Batch service to be able to schedule tasks on
 * the compute nodes. This can be verified by checking if the specified VNet
 * has any associated Network Security Groups (NSG). If communication to the
 * compute nodes in the specified subnet is denied by an NSG, then the Batch
 * service will set the state of the compute nodes to unusable. For pools
 * created via virtualMachineConfiguration the Batch account must have
 * poolAllocationMode userSubscription in order to use a VNet. If the specified
 * VNet has any associated Network Security Groups (NSG), then a few reserved
 * system ports must be enabled for inbound communication. For pools created
 * with a virtual machine configuration, enable ports 29876 and 29877, as well
 * as port 22 for Linux and port 3389 for Windows. For pools created with a
 * cloud service configuration, enable ports 10100, 20100, and 30100. Also
 * enable outbound connections to Azure Storage on port 443. For more details
 * see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
 * Pool endpoint configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object} [poolInfo.autoPoolSpecification.pool.startTask]
 * @member {string} [poolInfo.autoPoolSpecification.pool.startTask.commandLine]
 * The command line does not run under a shell, and therefore cannot take
 * advantage of shell features such as environment variable expansion. If you
 * want to take advantage of such features, you should invoke the shell in the
 * command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.startTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity] If omitted, the
 * task runs as a non-administrative user unique to the task.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
 * Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {number}
 * [poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount] The Batch
 * service retries a task if its exit code is nonzero. Note that this value
 * specifically controls the number of retries. The Batch service will try the
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * the task. If the maximum retry count is -1, the Batch service retries the
 * task without limit.
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess] If true and
 * the start task fails on a compute node, the Batch service retries the start
 * task up to its maximum retry count (maxTaskRetryCount). If the task has
 * still not completed successfully after all retries, then the Batch service
 * marks the compute node unusable, and will not schedule tasks to it. This
 * condition can be detected via the node state and failure info details. If
 * false, the Batch service will not wait for the start task to complete. In
 * this case, other tasks can start executing on the compute node while the
 * start task is still running; and even if the start task fails, new tasks
 * will continue to be scheduled on the node. The default is false.
 * @member {array} [poolInfo.autoPoolSpecification.pool.certificateReferences]
 * For Windows compute nodes, the Batch service installs the certificates to
 * the specified certificate store and location. For Linux compute nodes, the
 * certificates are stored in a directory inside the task working directory and
 * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
 * query for this location. For certificates with visibility of 'remoteUser', a
 * 'certs' directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
 * @member {array} [poolInfo.autoPoolSpecification.pool.applicationLicenses]
 * The list of application licenses must be a subset of available Batch service
 * application licenses. If a license is requested which is not supported, pool
 * creation will fail.
 * @member {array} [poolInfo.autoPoolSpecification.pool.userAccounts]
 * @member {array} [poolInfo.autoPoolSpecification.pool.metadata] The Batch
 * service does not assign any meaning to metadata; it is solely for the use of
 * user code.
 * @member {string} [onAllTasksComplete] The action the Batch service should
 * take when all tasks in the job are in the completed state. Note that if a
 * job contains no tasks, then all tasks are considered complete. This option
 * is therefore most commonly used with a Job Manager task; if you want to use
 * automatic job termination without a Job Manager, you should initially set
 * onAllTasksComplete to noAction and update the job properties to set
 * onAllTasksComplete to terminateJob once you have finished adding tasks.
 * Permitted values are: noAction - do nothing. The job remains active unless
 * terminated or disabled by some other means. terminateJob - terminate the
 * job. The job's terminateReason is set to 'AllTasksComplete'. The default is
 * noAction. Possible values include: 'noAction', 'terminateJob'
 * @member {string} [onTaskFailure] The action the Batch service should take
 * when any task in the job fails. A task is considered to have failed if has a
 * failureInfo. A failureInfo is set if the task completes with a non-zero exit
 * code after exhausting its retry count, or if there was an error starting the
 * task, for example due to a resource file download error. noAction - do
 * nothing. performExitOptionsJobAction - take the action associated with the
 * task exit condition in the task's exitConditions collection. (This may still
 * result in no action being taken, if that is what the task specifies.) The
 * default is noAction. Possible values include: 'noAction',
 * 'performExitOptionsJobAction'
 * @member {array} [metadata] A list of name-value pairs associated with the
 * job as metadata. The Batch service does not assign any meaning to metadata;
 * it is solely for the use of user code.
 * @member {boolean} [usesTaskDependencies] Whether tasks in the job can define
 * dependencies on each other. The default is false.
 */
export interface JobAddParameter {
    id: string;
    displayName?: string;
    priority?: number;
    constraints?: JobConstraints;
    jobManagerTask?: JobManagerTask;
    jobPreparationTask?: JobPreparationTask;
    jobReleaseTask?: JobReleaseTask;
    commonEnvironmentSettings?: EnvironmentSetting[];
    poolInfo: PoolInformation;
    onAllTasksComplete?: string;
    onTaskFailure?: string;
    metadata?: MetadataItem[];
    usesTaskDependencies?: boolean;
}
/**
 * @class
 * Initializes a new instance of the TaskFailureInformation class.
 * @constructor
 * @summary Information about a task failure.
 *
 * @member {string} category The category of the task error. Possible values
 * include: 'userError', 'serverError'
 * @member {string} [code] An identifier for the task error. Codes are
 * invariant and are intended to be consumed programmatically.
 * @member {string} [message] A message describing the task error, intended to
 * be suitable for display in a user interface.
 * @member {array} [details] A list of additional details related to the error.
 */
export interface TaskFailureInformation {
    category: string;
    code?: string;
    message?: string;
    details?: NameValuePair[];
}
/**
 * @class
 * Initializes a new instance of the JobPreparationTaskExecutionInformation class.
 * @constructor
 * @summary Contains information about the execution of a Job Preparation task
 * on a compute node.
 *
 * @member {date} startTime The time at which the task started running. If the
 * task has been restarted or retried, this is the most recent time at which
 * the task started running.
 * @member {date} [endTime] The time at which the Job Preparation task
 * completed. This property is set only if the task is in the Completed state.
 * @member {string} state The current state of the Job Preparation task on the
 * compute node. Values are:
 *
 * running - the task is currently running (including retrying).
 * completed - the task has exited with exit code 0, or the task has exhausted
 * its retry limit, or the Batch service was unable to start the task due to
 * task preparation errors (such as resource file download failures). Possible
 * values include: 'running', 'completed'
 * @member {string} [taskRootDirectory] The root directory of the Job
 * Preparation task on the compute node. You can use this path to retrieve
 * files created by the task, such as log files.
 * @member {string} [taskRootDirectoryUrl] The URL to the root directory of the
 * Job Preparation task on the compute node.
 * @member {number} [exitCode] The exit code of the program specified on the
 * task command line. This parameter is returned only if the task is in the
 * completed state. The exit code for a process reflects the specific
 * convention implemented by the application developer for that process. If you
 * use the exit code value to make decisions in your code, be sure that you
 * know the exit code convention used by the application process. Note that the
 * exit code may also be generated by the compute node operating system, such
 * as when a process is forcibly terminated.
 * @member {object} [failureInfo] Information describing the task failure, if
 * any. This property is set only if the task is in the completed state and
 * encountered a failure.
 * @member {string} [failureInfo.category] Possible values include:
 * 'userError', 'serverError'
 * @member {string} [failureInfo.code]
 * @member {string} [failureInfo.message]
 * @member {array} [failureInfo.details]
 * @member {number} retryCount The number of times the task has been retried by
 * the Batch service. Task application failures (non-zero exit code) are
 * retried, pre-processing errors (the task could not be run) and file upload
 * errors are not retried. The Batch service will retry the task up to the
 * limit specified by the constraints. Task application failures (non-zero exit
 * code) are retried, pre-processing errors (the task could not be run) and
 * file upload errors are not retried. The Batch service will retry the task up
 * to the limit specified by the constraints.
 * @member {date} [lastRetryTime] The most recent time at which a retry of the
 * Job Preparation task started running. This property is set only if the task
 * was retried (i.e. retryCount is nonzero). If present, this is typically the
 * same as startTime, but may be different if the task has been restarted for
 * reasons other than retry; for example, if the compute node was rebooted
 * during a retry, then the startTime is updated but the lastRetryTime is not.
 * @member {string} [result] The result of the task execution. If the value is
 * 'failed', then the details of the failure can be found in the failureInfo
 * property. Possible values include: 'success', 'failure'
 */
export interface JobPreparationTaskExecutionInformation {
    startTime: Date;
    endTime?: Date;
    state: string;
    taskRootDirectory?: string;
    taskRootDirectoryUrl?: string;
    exitCode?: number;
    failureInfo?: TaskFailureInformation;
    retryCount: number;
    lastRetryTime?: Date;
    result?: string;
}
/**
 * @class
 * Initializes a new instance of the JobReleaseTaskExecutionInformation class.
 * @constructor
 * @summary Contains information about the execution of a Job Release task on a
 * compute node.
 *
 * @member {date} startTime The time at which the task started running. If the
 * task has been restarted or retried, this is the most recent time at which
 * the task started running.
 * @member {date} [endTime] The time at which the Job Release task completed.
 * This property is set only if the task is in the Completed state.
 * @member {string} state The current state of the Job Release task on the
 * compute node. Values are:
 *
 * running - the task is currently running (including retrying).
 * completed - the task has exited, or the Batch service was unable to start
 * the task due to task preparation errors (such as resource file download
 * failures). Possible values include: 'running', 'completed'
 * @member {string} [taskRootDirectory] The root directory of the Job Release
 * task on the compute node. You can use this path to retrieve files created by
 * the task, such as log files.
 * @member {string} [taskRootDirectoryUrl] The URL to the root directory of the
 * Job Release task on the compute node.
 * @member {number} [exitCode] The exit code of the program specified on the
 * task command line. This parameter is returned only if the task is in the
 * completed state. The exit code for a process reflects the specific
 * convention implemented by the application developer for that process. If you
 * use the exit code value to make decisions in your code, be sure that you
 * know the exit code convention used by the application process. Note that the
 * exit code may also be generated by the compute node operating system, such
 * as when a process is forcibly terminated.
 * @member {object} [failureInfo] Information describing the task failure, if
 * any. This property is set only if the task is in the completed state and
 * encountered a failure.
 * @member {string} [failureInfo.category] Possible values include:
 * 'userError', 'serverError'
 * @member {string} [failureInfo.code]
 * @member {string} [failureInfo.message]
 * @member {array} [failureInfo.details]
 * @member {string} [result] The result of the task execution. If the value is
 * 'failed', then the details of the failure can be found in the failureInfo
 * property. Possible values include: 'success', 'failure'
 */
export interface JobReleaseTaskExecutionInformation {
    startTime: Date;
    endTime?: Date;
    state: string;
    taskRootDirectory?: string;
    taskRootDirectoryUrl?: string;
    exitCode?: number;
    failureInfo?: TaskFailureInformation;
    result?: string;
}
/**
 * @class
 * Initializes a new instance of the JobPreparationAndReleaseTaskExecutionInformation class.
 * @constructor
 * @summary The status of the Job Preparation and Job Release tasks on a
 * compute node.
 *
 * @member {string} [poolId] The ID of the pool containing the compute node to
 * which this entry refers.
 * @member {string} [nodeId] The ID of the compute node to which this entry
 * refers.
 * @member {string} [nodeUrl] The URL of the compute node to which this entry
 * refers.
 * @member {object} [jobPreparationTaskExecutionInfo] Information about the
 * execution status of the Job Preparation task on this compute node.
 * @member {date} [jobPreparationTaskExecutionInfo.startTime] If the task has
 * been restarted or retried, this is the most recent time at which the task
 * started running.
 * @member {date} [jobPreparationTaskExecutionInfo.endTime] This property is
 * set only if the task is in the Completed state.
 * @member {string} [jobPreparationTaskExecutionInfo.state] Values are:
 *
 * running - the task is currently running (including retrying).
 * completed - the task has exited with exit code 0, or the task has exhausted
 * its retry limit, or the Batch service was unable to start the task due to
 * task preparation errors (such as resource file download failures). Possible
 * values include: 'running', 'completed'
 * @member {string} [jobPreparationTaskExecutionInfo.taskRootDirectory]
 * @member {string} [jobPreparationTaskExecutionInfo.taskRootDirectoryUrl]
 * @member {number} [jobPreparationTaskExecutionInfo.exitCode] This parameter
 * is returned only if the task is in the completed state. The exit code for a
 * process reflects the specific convention implemented by the application
 * developer for that process. If you use the exit code value to make decisions
 * in your code, be sure that you know the exit code convention used by the
 * application process. Note that the exit code may also be generated by the
 * compute node operating system, such as when a process is forcibly
 * terminated.
 * @member {object} [jobPreparationTaskExecutionInfo.failureInfo] This property
 * is set only if the task is in the completed state and encountered a failure.
 * @member {string} [jobPreparationTaskExecutionInfo.failureInfo.category]
 * Possible values include: 'userError', 'serverError'
 * @member {string} [jobPreparationTaskExecutionInfo.failureInfo.code]
 * @member {string} [jobPreparationTaskExecutionInfo.failureInfo.message]
 * @member {array} [jobPreparationTaskExecutionInfo.failureInfo.details]
 * @member {number} [jobPreparationTaskExecutionInfo.retryCount] Task
 * application failures (non-zero exit code) are retried, pre-processing errors
 * (the task could not be run) and file upload errors are not retried. The
 * Batch service will retry the task up to the limit specified by the
 * constraints.
 * @member {date} [jobPreparationTaskExecutionInfo.lastRetryTime] This property
 * is set only if the task was retried (i.e. retryCount is nonzero). If
 * present, this is typically the same as startTime, but may be different if
 * the task has been restarted for reasons other than retry; for example, if
 * the compute node was rebooted during a retry, then the startTime is updated
 * but the lastRetryTime is not.
 * @member {string} [jobPreparationTaskExecutionInfo.result] If the value is
 * 'failed', then the details of the failure can be found in the failureInfo
 * property. Possible values include: 'success', 'failure'
 * @member {object} [jobReleaseTaskExecutionInfo] Information about the
 * execution status of the Job Release task on this compute node. This property
 * is set only if the Job Release task has run on the node.
 * @member {date} [jobReleaseTaskExecutionInfo.startTime] If the task has been
 * restarted or retried, this is the most recent time at which the task started
 * running.
 * @member {date} [jobReleaseTaskExecutionInfo.endTime] This property is set
 * only if the task is in the Completed state.
 * @member {string} [jobReleaseTaskExecutionInfo.state] Values are:
 *
 * running - the task is currently running (including retrying).
 * completed - the task has exited, or the Batch service was unable to start
 * the task due to task preparation errors (such as resource file download
 * failures). Possible values include: 'running', 'completed'
 * @member {string} [jobReleaseTaskExecutionInfo.taskRootDirectory]
 * @member {string} [jobReleaseTaskExecutionInfo.taskRootDirectoryUrl]
 * @member {number} [jobReleaseTaskExecutionInfo.exitCode] This parameter is
 * returned only if the task is in the completed state. The exit code for a
 * process reflects the specific convention implemented by the application
 * developer for that process. If you use the exit code value to make decisions
 * in your code, be sure that you know the exit code convention used by the
 * application process. Note that the exit code may also be generated by the
 * compute node operating system, such as when a process is forcibly
 * terminated.
 * @member {object} [jobReleaseTaskExecutionInfo.failureInfo] This property is
 * set only if the task is in the completed state and encountered a failure.
 * @member {string} [jobReleaseTaskExecutionInfo.failureInfo.category] Possible
 * values include: 'userError', 'serverError'
 * @member {string} [jobReleaseTaskExecutionInfo.failureInfo.code]
 * @member {string} [jobReleaseTaskExecutionInfo.failureInfo.message]
 * @member {array} [jobReleaseTaskExecutionInfo.failureInfo.details]
 * @member {string} [jobReleaseTaskExecutionInfo.result] If the value is
 * 'failed', then the details of the failure can be found in the failureInfo
 * property. Possible values include: 'success', 'failure'
 */
export interface JobPreparationAndReleaseTaskExecutionInformation {
    poolId?: string;
    nodeId?: string;
    nodeUrl?: string;
    jobPreparationTaskExecutionInfo?: JobPreparationTaskExecutionInformation;
    jobReleaseTaskExecutionInfo?: JobReleaseTaskExecutionInformation;
}
/**
 * @class
 * Initializes a new instance of the TaskCounts class.
 * @constructor
 * @summary The task counts for a job.
 *
 * @member {number} active The number of tasks in the active state.
 * @member {number} running The number of tasks in the running or preparing
 * state.
 * @member {number} completed The number of tasks in the completed state.
 * @member {number} succeeded The number of tasks which succeeded. A task
 * succeeds if its result (found in the executionInfo property) is 'success'.
 * @member {number} failed The number of tasks which failed. A task fails if
 * its result (found in the executionInfo property) is 'failure'.
 * @member {string} validationStatus Whether the task counts have been
 * validated. If the validationStatus is unvalidated, then the Batch service
 * has not been able to check state counts against the task states as reported
 * in the List Tasks API. The validationStatus may be unvalidated if the job
 * contains more than 200,000 tasks. Possible values include: 'validated',
 * 'unvalidated'
 */
export interface TaskCounts {
    active: number;
    running: number;
    completed: number;
    succeeded: number;
    failed: number;
    validationStatus: string;
}
/**
 * @class
 * Initializes a new instance of the AutoScaleRunError class.
 * @constructor
 * @summary An error that occurred when executing or evaluating a pool
 * autoscale formula.
 *
 * @member {string} [code] An identifier for the autoscale error. Codes are
 * invariant and are intended to be consumed programmatically.
 * @member {string} [message] A message describing the autoscale error,
 * intended to be suitable for display in a user interface.
 * @member {array} [values] A list of additional error details related to the
 * autoscale error.
 */
export interface AutoScaleRunError {
    code?: string;
    message?: string;
    values?: NameValuePair[];
}
/**
 * @class
 * Initializes a new instance of the AutoScaleRun class.
 * @constructor
 * @summary The results and errors from an execution of a pool autoscale
 * formula.
 *
 * @member {date} timestamp The time at which the autoscale formula was last
 * evaluated.
 * @member {string} [results] The final values of all variables used in the
 * evaluation of the autoscale formula. Each variable value is returned in the
 * form $variable=value, and variables are separated by semicolons.
 * @member {object} [error] Details of the error encountered evaluating the
 * autoscale formula on the pool, if the evaluation was unsuccessful.
 * @member {string} [error.code]
 * @member {string} [error.message]
 * @member {array} [error.values]
 */
export interface AutoScaleRun {
    timestamp: Date;
    results?: string;
    error?: AutoScaleRunError;
}
/**
 * @class
 * Initializes a new instance of the ResizeError class.
 * @constructor
 * @summary An error that occurred when resizing a pool.
 *
 * @member {string} [code] An identifier for the pool resize error. Codes are
 * invariant and are intended to be consumed programmatically.
 * @member {string} [message] A message describing the pool resize error,
 * intended to be suitable for display in a user interface.
 * @member {array} [values] A list of additional error details related to the
 * pool resize error.
 */
export interface ResizeError {
    code?: string;
    message?: string;
    values?: NameValuePair[];
}
/**
 * @class
 * Initializes a new instance of the CloudPool class.
 * @constructor
 * @summary A pool in the Azure Batch service.
 *
 * @member {string} [id] A string that uniquely identifies the pool within the
 * account. The ID can contain any combination of alphanumeric characters
 * including hyphens and underscores, and cannot contain more than 64
 * characters. The ID is case-preserving and case-insensitive (that is, you may
 * not have two IDs within an account that differ only by case).
 * @member {string} [displayName] The display name for the pool. The display
 * name need not be unique and can contain any Unicode characters up to a
 * maximum length of 1024.
 * @member {string} [url] The URL of the pool.
 * @member {string} [eTag] The ETag of the pool. This is an opaque string. You
 * can use it to detect whether the pool has changed between requests. In
 * particular, you can be pass the ETag when updating a pool to specify that
 * your changes should take effect only if nobody else has modified the pool in
 * the meantime.
 * @member {date} [lastModified] The last modified time of the pool. This is
 * the last time at which the pool level data, such as the targetDedicatedNodes
 * or enableAutoscale settings, changed. It does not factor in node-level
 * changes such as a compute node changing state.
 * @member {date} [creationTime] The creation time of the pool.
 * @member {string} [state] The current state of the pool. Values are:
 *
 * active - The pool is available to run tasks subject to the availability of
 * compute nodes.
 * deleting - The user has requested that the pool be deleted, but the delete
 * operation has not yet completed.
 * upgrading - The user has requested that the operating system of the pool's
 * nodes be upgraded, but the upgrade operation has not yet completed (that is,
 * some nodes in the pool have not yet been upgraded). While upgrading, the
 * pool may be able to run tasks (with reduced capacity) but this is not
 * guaranteed. Possible values include: 'active', 'deleting', 'upgrading'
 * @member {date} [stateTransitionTime] The time at which the pool entered its
 * current state.
 * @member {string} [allocationState] Whether the pool is resizing. Values are:
 *
 * steady - The pool is not resizing. There are no changes to the number of
 * nodes in the pool in progress. A pool enters this state when it is created
 * and when no operations are being performed on the pool to change the number
 * of dedicated nodes.
 * resizing - The pool is resizing; that is, compute nodes are being added to
 * or removed from the pool.
 * stopping - The pool was resizing, but the user has requested that the resize
 * be stopped, but the stop request has not yet been completed. Possible values
 * include: 'steady', 'resizing', 'stopping'
 * @member {date} [allocationStateTransitionTime] The time at which the pool
 * entered its current allocation state.
 * @member {string} [vmSize] The size of virtual machines in the pool. All
 * virtual machines in a pool are the same size. For information about
 * available sizes of virtual machines for Cloud Services pools (pools created
 * with cloudServiceConfiguration), see Sizes for Cloud Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object} [cloudServiceConfiguration] The cloud service configuration
 * for the pool. This property and virtualMachineConfiguration are mutually
 * exclusive and one of the properties must be specified. This property cannot
 * be specified if the Batch account was created with its poolAllocationMode
 * property set to 'UserSubscription'.
 * @member {string} [cloudServiceConfiguration.osFamily] Possible values are: 2
 * - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3,
 * equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows
 * Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. For more
 * information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string} [cloudServiceConfiguration.targetOSVersion] The default
 * value is * which specifies the latest operating system version for the
 * specified OS family.
 * @member {string} [cloudServiceConfiguration.currentOSVersion] This may
 * differ from targetOSVersion if the pool state is Upgrading. In this case
 * some virtual machines may be on the targetOSVersion and some may be on the
 * currentOSVersion during the upgrade process. Once all virtual machines have
 * upgraded, currentOSVersion is updated to be the same as targetOSVersion.
 * @member {object} [virtualMachineConfiguration] The virtual machine
 * configuration for the pool. This property and cloudServiceConfiguration are
 * mutually exclusive and one of the properties must be specified.
 * @member {object} [virtualMachineConfiguration.imageReference] This property
 * and osDisk are mutually exclusive and one of the properties must be
 * specified.
 * @member {string} [virtualMachineConfiguration.imageReference.publisher] For
 * example, Canonical or MicrosoftWindowsServer.
 * @member {string} [virtualMachineConfiguration.imageReference.offer] For
 * example, UbuntuServer or WindowsServer.
 * @member {string} [virtualMachineConfiguration.imageReference.sku] For
 * example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string} [virtualMachineConfiguration.imageReference.version] A
 * value of 'latest' can be specified to select the latest version of an image.
 * If omitted, the default is 'latest'.
 * @member {object} [virtualMachineConfiguration.osDisk] This property can be
 * specified only if the Batch account was created with its poolAllocationMode
 * property set to 'UserSubscription'. This property and imageReference are
 * mutually exclusive and one of the properties must be specified.
 * @member {array} [virtualMachineConfiguration.osDisk.imageUris] All the VHDs
 * must be identical and must reside in an Azure Storage account within the
 * same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string} [virtualMachineConfiguration.osDisk.caching] Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string} [virtualMachineConfiguration.nodeAgentSKUId] The Batch node
 * agent is a program that runs on each node in the pool, and provides the
 * command-and-control interface between the node and the Batch service. There
 * are different implementations of the node agent, known as SKUs, for
 * different operating systems. You must specify a node agent SKU which matches
 * the selected image reference. To get the list of supported node agent SKUs
 * along with their list of verified image references, see the 'List supported
 * node agent SKUs' operation.
 * @member {object} [virtualMachineConfiguration.windowsConfiguration] This
 * property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates] If
 * omitted, the default value is true.
 * @member {moment.duration} [resizeTimeout] The timeout for allocation of
 * compute nodes to the pool. This is the timeout for the most recent resize
 * operation. (The initial sizing when the pool is created counts as a resize.)
 * The default value is 15 minutes.
 * @member {array} [resizeErrors] A list of errors encountered while performing
 * the last resize on the pool. This property is set only if one or more errors
 * occurred during the last pool resize, and only when the pool allocationState
 * is Steady.
 * @member {number} [currentDedicatedNodes] The number of dedicated compute
 * nodes currently in the pool.
 * @member {number} [currentLowPriorityNodes] The number of low-priority
 * compute nodes currently in the pool. Low-priority compute nodes which have
 * been preempted are included in this count.
 * @member {number} [targetDedicatedNodes] The desired number of dedicated
 * compute nodes in the pool.
 * @member {number} [targetLowPriorityNodes] The desired number of low-priority
 * compute nodes in the pool.
 * @member {boolean} [enableAutoScale] Whether the pool size should
 * automatically adjust over time. If false, at least one of
 * targetDedicateNodes and targetLowPriorityNodes must be specified. If true,
 * the autoScaleFormula property is required and the pool automatically resizes
 * according to the formula. The default value is false.
 * @member {string} [autoScaleFormula] A formula for the desired number of
 * compute nodes in the pool. This property is set only if the pool
 * automatically scales, i.e. enableAutoScale is true.
 * @member {moment.duration} [autoScaleEvaluationInterval] The time interval at
 * which to automatically adjust the pool size according to the autoscale
 * formula. This property is set only if the pool automatically scales, i.e.
 * enableAutoScale is true.
 * @member {object} [autoScaleRun] The results and errors from the last
 * execution of the autoscale formula. This property is set only if the pool
 * automatically scales, i.e. enableAutoScale is true.
 * @member {date} [autoScaleRun.timestamp]
 * @member {string} [autoScaleRun.results] Each variable value is returned in
 * the form $variable=value, and variables are separated by semicolons.
 * @member {object} [autoScaleRun.error]
 * @member {string} [autoScaleRun.error.code]
 * @member {string} [autoScaleRun.error.message]
 * @member {array} [autoScaleRun.error.values]
 * @member {boolean} [enableInterNodeCommunication] Whether the pool permits
 * direct communication between nodes. This imposes restrictions on which nodes
 * can be assigned to the pool. Specifying this value can reduce the chance of
 * the requested number of nodes to be allocated in the pool.
 * @member {object} [networkConfiguration] The network configuration for the
 * pool.
 * @member {string} [networkConfiguration.subnetId] The virtual network must be
 * in the same region and subscription as the Azure Batch account. The
 * specified subnet should have enough free IP addresses to accommodate the
 * number of nodes in the pool. If the subnet doesn't have enough free IP
 * addresses, the pool will partially allocate compute nodes, and a resize
 * error will occur. The 'MicrosoftAzureBatch' service principal must have the
 * 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role
 * for the specified VNet. The specified subnet must allow communication from
 * the Azure Batch service to be able to schedule tasks on the compute nodes.
 * This can be verified by checking if the specified VNet has any associated
 * Network Security Groups (NSG). If communication to the compute nodes in the
 * specified subnet is denied by an NSG, then the Batch service will set the
 * state of the compute nodes to unusable. For pools created via
 * virtualMachineConfiguration the Batch account must have poolAllocationMode
 * userSubscription in order to use a VNet. If the specified VNet has any
 * associated Network Security Groups (NSG), then a few reserved system ports
 * must be enabled for inbound communication. For pools created with a virtual
 * machine configuration, enable ports 29876 and 29877, as well as port 22 for
 * Linux and port 3389 for Windows. For pools created with a cloud service
 * configuration, enable ports 10100, 20100, and 30100. Also enable outbound
 * connections to Azure Storage on port 443. For more details see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object} [networkConfiguration.endpointConfiguration] Pool endpoint
 * configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array} [networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object} [startTask] A task specified to run on each compute node as
 * it joins the pool.
 * @member {string} [startTask.commandLine] The command line does not run under
 * a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [startTask.resourceFiles] Files listed under this element
 * are located in the task's working directory.
 * @member {array} [startTask.environmentSettings]
 * @member {object} [startTask.userIdentity] If omitted, the task runs as a
 * non-administrative user unique to the task.
 * @member {string} [startTask.userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {object} [startTask.userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {string} [startTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [startTask.userIdentity.autoUser.elevationLevel] nonAdmin -
 * The auto user is a standard user without elevated access. admin - The auto
 * user is a user with elevated access and operates with full Administrator
 * permissions. The default value is nonAdmin. Possible values include:
 * 'nonAdmin', 'admin'
 * @member {number} [startTask.maxTaskRetryCount] The Batch service retries a
 * task if its exit code is nonzero. Note that this value specifically controls
 * the number of retries. The Batch service will try the task once, and may
 * then retry up to this limit. For example, if the maximum retry count is 3,
 * Batch tries the task up to 4 times (one initial try and 3 retries). If the
 * maximum retry count is 0, the Batch service does not retry the task. If the
 * maximum retry count is -1, the Batch service retries the task without limit.
 * @member {boolean} [startTask.waitForSuccess] If true and the start task
 * fails on a compute node, the Batch service retries the start task up to its
 * maximum retry count (maxTaskRetryCount). If the task has still not completed
 * successfully after all retries, then the Batch service marks the compute
 * node unusable, and will not schedule tasks to it. This condition can be
 * detected via the node state and failure info details. If false, the Batch
 * service will not wait for the start task to complete. In this case, other
 * tasks can start executing on the compute node while the start task is still
 * running; and even if the start task fails, new tasks will continue to be
 * scheduled on the node. The default is false.
 * @member {array} [certificateReferences] The list of certificates to be
 * installed on each compute node in the pool. For Windows compute nodes, the
 * Batch service installs the certificates to the specified certificate store
 * and location. For Linux compute nodes, the certificates are stored in a
 * directory inside the task working directory and an environment variable
 * AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this
 * location. For certificates with visibility of 'remoteUser', a 'certs'
 * directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array} [applicationPackageReferences] The list of application
 * packages to be installed on each compute node in the pool.
 * @member {array} [applicationLicenses] The list of application licenses the
 * Batch service will make available on each compute node in the pool. The list
 * of application licenses must be a subset of available Batch service
 * application licenses. If a license is requested which is not supported, pool
 * creation will fail.
 * @member {number} [maxTasksPerNode] The maximum number of tasks that can run
 * concurrently on a single compute node in the pool.
 * @member {object} [taskSchedulingPolicy] How tasks are distributed across
 * compute nodes in a pool.
 * @member {string} [taskSchedulingPolicy.nodeFillType] Possible values
 * include: 'spread', 'pack'
 * @member {array} [userAccounts] The list of user accounts to be created on
 * each node in the pool.
 * @member {array} [metadata] A list of name-value pairs associated with the
 * pool as metadata.
 * @member {object} [stats] Utilization and resource usage statistics for the
 * entire lifetime of the pool.
 * @member {string} [stats.url]
 * @member {date} [stats.startTime]
 * @member {date} [stats.lastUpdateTime]
 * @member {object} [stats.usageStats]
 * @member {date} [stats.usageStats.startTime]
 * @member {date} [stats.usageStats.lastUpdateTime]
 * @member {moment.duration} [stats.usageStats.dedicatedCoreTime]
 * @member {object} [stats.resourceStats]
 * @member {date} [stats.resourceStats.startTime]
 * @member {date} [stats.resourceStats.lastUpdateTime]
 * @member {number} [stats.resourceStats.avgCPUPercentage]
 * @member {number} [stats.resourceStats.avgMemoryGiB]
 * @member {number} [stats.resourceStats.peakMemoryGiB]
 * @member {number} [stats.resourceStats.avgDiskGiB]
 * @member {number} [stats.resourceStats.peakDiskGiB]
 * @member {number} [stats.resourceStats.diskReadIOps]
 * @member {number} [stats.resourceStats.diskWriteIOps]
 * @member {number} [stats.resourceStats.diskReadGiB]
 * @member {number} [stats.resourceStats.diskWriteGiB]
 * @member {number} [stats.resourceStats.networkReadGiB]
 * @member {number} [stats.resourceStats.networkWriteGiB]
 */
export interface CloudPool {
    id?: string;
    displayName?: string;
    url?: string;
    eTag?: string;
    lastModified?: Date;
    creationTime?: Date;
    state?: string;
    stateTransitionTime?: Date;
    allocationState?: string;
    allocationStateTransitionTime?: Date;
    vmSize?: string;
    cloudServiceConfiguration?: CloudServiceConfiguration;
    virtualMachineConfiguration?: VirtualMachineConfiguration;
    resizeTimeout?: moment.Duration;
    resizeErrors?: ResizeError[];
    currentDedicatedNodes?: number;
    currentLowPriorityNodes?: number;
    targetDedicatedNodes?: number;
    targetLowPriorityNodes?: number;
    enableAutoScale?: boolean;
    autoScaleFormula?: string;
    autoScaleEvaluationInterval?: moment.Duration;
    autoScaleRun?: AutoScaleRun;
    enableInterNodeCommunication?: boolean;
    networkConfiguration?: NetworkConfiguration;
    startTask?: StartTask;
    certificateReferences?: CertificateReference[];
    applicationPackageReferences?: ApplicationPackageReference[];
    applicationLicenses?: string[];
    maxTasksPerNode?: number;
    taskSchedulingPolicy?: TaskSchedulingPolicy;
    userAccounts?: UserAccount[];
    metadata?: MetadataItem[];
    stats?: PoolStatistics;
}
/**
 * @class
 * Initializes a new instance of the PoolAddParameter class.
 * @constructor
 * @summary A pool in the Azure Batch service to add.
 *
 * @member {string} id A string that uniquely identifies the pool within the
 * account. The ID can contain any combination of alphanumeric characters
 * including hyphens and underscores, and cannot contain more than 64
 * characters. The ID is case-preserving and case-insensitive (that is, you may
 * not have two pool IDs within an account that differ only by case).
 * @member {string} [displayName] The display name for the pool. The display
 * name need not be unique and can contain any Unicode characters up to a
 * maximum length of 1024.
 * @member {string} vmSize The size of virtual machines in the pool. All
 * virtual machines in a pool are the same size. For information about
 * available sizes of virtual machines for Cloud Services pools (pools created
 * with cloudServiceConfiguration), see Sizes for Cloud Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object} [cloudServiceConfiguration] The cloud service configuration
 * for the pool. This property and virtualMachineConfiguration are mutually
 * exclusive and one of the properties must be specified. This property cannot
 * be specified if the Batch account was created with its poolAllocationMode
 * property set to 'UserSubscription'.
 * @member {string} [cloudServiceConfiguration.osFamily] Possible values are: 2
 * - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3,
 * equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows
 * Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. For more
 * information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string} [cloudServiceConfiguration.targetOSVersion] The default
 * value is * which specifies the latest operating system version for the
 * specified OS family.
 * @member {string} [cloudServiceConfiguration.currentOSVersion] This may
 * differ from targetOSVersion if the pool state is Upgrading. In this case
 * some virtual machines may be on the targetOSVersion and some may be on the
 * currentOSVersion during the upgrade process. Once all virtual machines have
 * upgraded, currentOSVersion is updated to be the same as targetOSVersion.
 * @member {object} [virtualMachineConfiguration] The virtual machine
 * configuration for the pool. This property and cloudServiceConfiguration are
 * mutually exclusive and one of the properties must be specified.
 * @member {object} [virtualMachineConfiguration.imageReference] This property
 * and osDisk are mutually exclusive and one of the properties must be
 * specified.
 * @member {string} [virtualMachineConfiguration.imageReference.publisher] For
 * example, Canonical or MicrosoftWindowsServer.
 * @member {string} [virtualMachineConfiguration.imageReference.offer] For
 * example, UbuntuServer or WindowsServer.
 * @member {string} [virtualMachineConfiguration.imageReference.sku] For
 * example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string} [virtualMachineConfiguration.imageReference.version] A
 * value of 'latest' can be specified to select the latest version of an image.
 * If omitted, the default is 'latest'.
 * @member {object} [virtualMachineConfiguration.osDisk] This property can be
 * specified only if the Batch account was created with its poolAllocationMode
 * property set to 'UserSubscription'. This property and imageReference are
 * mutually exclusive and one of the properties must be specified.
 * @member {array} [virtualMachineConfiguration.osDisk.imageUris] All the VHDs
 * must be identical and must reside in an Azure Storage account within the
 * same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string} [virtualMachineConfiguration.osDisk.caching] Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string} [virtualMachineConfiguration.nodeAgentSKUId] The Batch node
 * agent is a program that runs on each node in the pool, and provides the
 * command-and-control interface between the node and the Batch service. There
 * are different implementations of the node agent, known as SKUs, for
 * different operating systems. You must specify a node agent SKU which matches
 * the selected image reference. To get the list of supported node agent SKUs
 * along with their list of verified image references, see the 'List supported
 * node agent SKUs' operation.
 * @member {object} [virtualMachineConfiguration.windowsConfiguration] This
 * property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates] If
 * omitted, the default value is true.
 * @member {moment.duration} [resizeTimeout] The timeout for allocation of
 * compute nodes to the pool. This timeout applies only to manual scaling; it
 * has no effect when enableAutoScale is set to true. The default value is 15
 * minutes. The minimum value is 5 minutes. If you specify a value less than 5
 * minutes, the Batch service returns an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 * @member {number} [targetDedicatedNodes] The desired number of dedicated
 * compute nodes in the pool. This property must not be specified if
 * enableAutoScale is set to true. If enableAutoScale is set to false, then you
 * must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {number} [targetLowPriorityNodes] The desired number of low-priority
 * compute nodes in the pool. This property must not be specified if
 * enableAutoScale is set to true. If enableAutoScale is set to false, then you
 * must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {boolean} [enableAutoScale] Whether the pool size should
 * automatically adjust over time. If false, at least one of
 * targetDedicateNodes and targetLowPriorityNodes must be specified. If true,
 * the autoScaleFormula property is required and the pool automatically resizes
 * according to the formula. The default value is false.
 * @member {string} [autoScaleFormula] A formula for the desired number of
 * compute nodes in the pool. This property must not be specified if
 * enableAutoScale is set to false. It is required if enableAutoScale is set to
 * true. The formula is checked for validity before the pool is created. If the
 * formula is not valid, the Batch service rejects the request with detailed
 * error information. For more information about specifying this formula, see
 * 'Automatically scale compute nodes in an Azure Batch pool'
 * (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/).
 * @member {moment.duration} [autoScaleEvaluationInterval] The time interval at
 * which to automatically adjust the pool size according to the autoscale
 * formula. The default value is 15 minutes. The minimum and maximum value are
 * 5 minutes and 168 hours respectively. If you specify a value less than 5
 * minutes or greater than 168 hours, the Batch service returns an error; if
 * you are calling the REST API directly, the HTTP status code is 400 (Bad
 * Request).
 * @member {boolean} [enableInterNodeCommunication] Whether the pool permits
 * direct communication between nodes. Enabling inter-node communication limits
 * the maximum size of the pool due to deployment restrictions on the nodes of
 * the pool. This may result in the pool not reaching its desired size. The
 * default value is false.
 * @member {object} [networkConfiguration] The network configuration for the
 * pool.
 * @member {string} [networkConfiguration.subnetId] The virtual network must be
 * in the same region and subscription as the Azure Batch account. The
 * specified subnet should have enough free IP addresses to accommodate the
 * number of nodes in the pool. If the subnet doesn't have enough free IP
 * addresses, the pool will partially allocate compute nodes, and a resize
 * error will occur. The 'MicrosoftAzureBatch' service principal must have the
 * 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role
 * for the specified VNet. The specified subnet must allow communication from
 * the Azure Batch service to be able to schedule tasks on the compute nodes.
 * This can be verified by checking if the specified VNet has any associated
 * Network Security Groups (NSG). If communication to the compute nodes in the
 * specified subnet is denied by an NSG, then the Batch service will set the
 * state of the compute nodes to unusable. For pools created via
 * virtualMachineConfiguration the Batch account must have poolAllocationMode
 * userSubscription in order to use a VNet. If the specified VNet has any
 * associated Network Security Groups (NSG), then a few reserved system ports
 * must be enabled for inbound communication. For pools created with a virtual
 * machine configuration, enable ports 29876 and 29877, as well as port 22 for
 * Linux and port 3389 for Windows. For pools created with a cloud service
 * configuration, enable ports 10100, 20100, and 30100. Also enable outbound
 * connections to Azure Storage on port 443. For more details see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object} [networkConfiguration.endpointConfiguration] Pool endpoint
 * configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array} [networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object} [startTask] A task specified to run on each compute node as
 * it joins the pool. The task runs when the node is added to the pool or when
 * the node is restarted.
 * @member {string} [startTask.commandLine] The command line does not run under
 * a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [startTask.resourceFiles] Files listed under this element
 * are located in the task's working directory.
 * @member {array} [startTask.environmentSettings]
 * @member {object} [startTask.userIdentity] If omitted, the task runs as a
 * non-administrative user unique to the task.
 * @member {string} [startTask.userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {object} [startTask.userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {string} [startTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [startTask.userIdentity.autoUser.elevationLevel] nonAdmin -
 * The auto user is a standard user without elevated access. admin - The auto
 * user is a user with elevated access and operates with full Administrator
 * permissions. The default value is nonAdmin. Possible values include:
 * 'nonAdmin', 'admin'
 * @member {number} [startTask.maxTaskRetryCount] The Batch service retries a
 * task if its exit code is nonzero. Note that this value specifically controls
 * the number of retries. The Batch service will try the task once, and may
 * then retry up to this limit. For example, if the maximum retry count is 3,
 * Batch tries the task up to 4 times (one initial try and 3 retries). If the
 * maximum retry count is 0, the Batch service does not retry the task. If the
 * maximum retry count is -1, the Batch service retries the task without limit.
 * @member {boolean} [startTask.waitForSuccess] If true and the start task
 * fails on a compute node, the Batch service retries the start task up to its
 * maximum retry count (maxTaskRetryCount). If the task has still not completed
 * successfully after all retries, then the Batch service marks the compute
 * node unusable, and will not schedule tasks to it. This condition can be
 * detected via the node state and failure info details. If false, the Batch
 * service will not wait for the start task to complete. In this case, other
 * tasks can start executing on the compute node while the start task is still
 * running; and even if the start task fails, new tasks will continue to be
 * scheduled on the node. The default is false.
 * @member {array} [certificateReferences] The list of certificates to be
 * installed on each compute node in the pool. For Windows compute nodes, the
 * Batch service installs the certificates to the specified certificate store
 * and location. For Linux compute nodes, the certificates are stored in a
 * directory inside the task working directory and an environment variable
 * AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this
 * location. For certificates with visibility of 'remoteUser', a 'certs'
 * directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array} [applicationPackageReferences] The list of application
 * packages to be installed on each compute node in the pool.
 * @member {array} [applicationLicenses] The list of application licenses the
 * Batch service will make available on each compute node in the pool. The list
 * of application licenses must be a subset of available Batch service
 * application licenses. If a license is requested which is not supported, pool
 * creation will fail.
 * @member {number} [maxTasksPerNode] The maximum number of tasks that can run
 * concurrently on a single compute node in the pool. The default value is 1.
 * The maximum value of this setting depends on the size of the compute nodes
 * in the pool (the vmSize setting).
 * @member {object} [taskSchedulingPolicy] How tasks are distributed across
 * compute nodes in a pool.
 * @member {string} [taskSchedulingPolicy.nodeFillType] Possible values
 * include: 'spread', 'pack'
 * @member {array} [userAccounts] The list of user accounts to be created on
 * each node in the pool.
 * @member {array} [metadata] A list of name-value pairs associated with the
 * pool as metadata. The Batch service does not assign any meaning to metadata;
 * it is solely for the use of user code.
 */
export interface PoolAddParameter {
    id: string;
    displayName?: string;
    vmSize: string;
    cloudServiceConfiguration?: CloudServiceConfiguration;
    virtualMachineConfiguration?: VirtualMachineConfiguration;
    resizeTimeout?: moment.Duration;
    targetDedicatedNodes?: number;
    targetLowPriorityNodes?: number;
    enableAutoScale?: boolean;
    autoScaleFormula?: string;
    autoScaleEvaluationInterval?: moment.Duration;
    enableInterNodeCommunication?: boolean;
    networkConfiguration?: NetworkConfiguration;
    startTask?: StartTask;
    certificateReferences?: CertificateReference[];
    applicationPackageReferences?: ApplicationPackageReference[];
    applicationLicenses?: string[];
    maxTasksPerNode?: number;
    taskSchedulingPolicy?: TaskSchedulingPolicy;
    userAccounts?: UserAccount[];
    metadata?: MetadataItem[];
}
/**
 * @class
 * Initializes a new instance of the AffinityInformation class.
 * @constructor
 * @summary A locality hint that can be used by the Batch service to select a
 * compute node on which to start a task.
 *
 * @member {string} affinityId An opaque string representing the location of a
 * compute node or a task that has run previously. You can pass the affinityId
 * of a compute node to indicate that this task needs to run on that compute
 * node. Note that this is just a soft affinity. If the target node is busy or
 * unavailable at the time the task is scheduled, then the task will be
 * scheduled elsewhere.
 */
export interface AffinityInformation {
    affinityId: string;
}
/**
 * @class
 * Initializes a new instance of the TaskExecutionInformation class.
 * @constructor
 * @summary Information about the execution of a task.
 *
 * @member {date} [startTime] The time at which the task started running.
 * 'Running' corresponds to the running state, so if the task specifies
 * resource files or application packages, then the start time reflects the
 * time at which the task started downloading or deploying these. If the task
 * has been restarted or retried, this is the most recent time at which the
 * task started running. This property is present only for tasks that are in
 * the running or completed state.
 * @member {date} [endTime] The time at which the task completed. This property
 * is set only if the task is in the Completed state.
 * @member {number} [exitCode] The exit code of the program specified on the
 * task command line. This property is set only if the task is in the completed
 * state. In general, the exit code for a process reflects the specific
 * convention implemented by the application developer for that process. If you
 * use the exit code value to make decisions in your code, be sure that you
 * know the exit code convention used by the application process. However, if
 * the Batch service terminates the task (due to timeout, or user termination
 * via the API) you may see an operating system-defined exit code.
 * @member {object} [failureInfo] Information describing the task failure, if
 * any. This property is set only if the task is in the completed state and
 * encountered a failure.
 * @member {string} [failureInfo.category] Possible values include:
 * 'userError', 'serverError'
 * @member {string} [failureInfo.code]
 * @member {string} [failureInfo.message]
 * @member {array} [failureInfo.details]
 * @member {number} retryCount The number of times the task has been retried by
 * the Batch service. Task application failures (non-zero exit code) are
 * retried, pre-processing errors (the task could not be run) and file upload
 * errors are not retried. The Batch service will retry the task up to the
 * limit specified by the constraints.
 * @member {date} [lastRetryTime] The most recent time at which a retry of the
 * task started running. This element is present only if the task was retried
 * (i.e. retryCount is nonzero). If present, this is typically the same as
 * startTime, but may be different if the task has been restarted for reasons
 * other than retry; for example, if the compute node was rebooted during a
 * retry, then the startTime is updated but the lastRetryTime is not.
 * @member {number} requeueCount The number of times the task has been requeued
 * by the Batch service as the result of a user request. When the user removes
 * nodes from a pool (by resizing/shrinking the pool) or when the job is being
 * disabled, the user can specify that running tasks on the nodes be requeued
 * for execution. This count tracks how many times the task has been requeued
 * for these reasons.
 * @member {date} [lastRequeueTime] The most recent time at which the task has
 * been requeued by the Batch service as the result of a user request. This
 * property is set only if the requeueCount is nonzero.
 * @member {string} [result] The result of the task execution. If the value is
 * 'failed', then the details of the failure can be found in the failureInfo
 * property. Possible values include: 'success', 'failure'
 */
export interface TaskExecutionInformation {
    startTime?: Date;
    endTime?: Date;
    exitCode?: number;
    failureInfo?: TaskFailureInformation;
    retryCount: number;
    lastRetryTime?: Date;
    requeueCount: number;
    lastRequeueTime?: Date;
    result?: string;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeInformation class.
 * @constructor
 * @summary Information about the compute node on which a task ran.
 *
 * @member {string} [affinityId] An identifier for the compute node on which
 * the task ran, which can be passed when adding a task to request that the
 * task be scheduled on this compute node.
 * @member {string} [nodeUrl] The URL of the node on which the task ran. .
 * @member {string} [poolId] The ID of the pool on which the task ran.
 * @member {string} [nodeId] The ID of the node on which the task ran.
 * @member {string} [taskRootDirectory] The root directory of the task on the
 * compute node.
 * @member {string} [taskRootDirectoryUrl] The URL to the root directory of the
 * task on the compute node.
 */
export interface ComputeNodeInformation {
    affinityId?: string;
    nodeUrl?: string;
    poolId?: string;
    nodeId?: string;
    taskRootDirectory?: string;
    taskRootDirectoryUrl?: string;
}
/**
 * @class
 * Initializes a new instance of the MultiInstanceSettings class.
 * @constructor
 * @summary Settings which specify how to run a multi-instance task.
 *
 * Multi-instance tasks are commonly used to support MPI tasks.
 *
 * @member {number} numberOfInstances The number of compute nodes required by
 * the task.
 * @member {string} [coordinationCommandLine] The command line to run on all
 * the compute nodes to enable them to coordinate when the primary runs the
 * main task command. A typical coordination command line launches a background
 * service and verifies that the service is ready to process inter-node
 * messages.
 * @member {array} [commonResourceFiles] A list of files that the Batch service
 * will download before running the coordination command line. The difference
 * between common resource files and task resource files is that common
 * resource files are downloaded for all subtasks including the primary,
 * whereas task resource files are downloaded only for the primary. Also note
 * that these resource files are not downloaded to the task working directory,
 * but instead are downloaded to the task root directory (one directory above
 * the working directory).
 */
export interface MultiInstanceSettings {
    numberOfInstances: number;
    coordinationCommandLine?: string;
    commonResourceFiles?: ResourceFile[];
}
/**
 * @class
 * Initializes a new instance of the TaskStatistics class.
 * @constructor
 * @summary Resource usage statistics for a task.
 *
 * @member {string} url The URL of the statistics.
 * @member {date} startTime The start time of the time range covered by the
 * statistics.
 * @member {date} lastUpdateTime The time at which the statistics were last
 * updated. All statistics are limited to the range between startTime and
 * lastUpdateTime.
 * @member {moment.duration} userCPUTime The total user mode CPU time (summed
 * across all cores and all compute nodes) consumed by the task.
 * @member {moment.duration} kernelCPUTime The total kernel mode CPU time
 * (summed across all cores and all compute nodes) consumed by the task.
 * @member {moment.duration} wallClockTime The total wall clock time of the
 * task. The wall clock time is the elapsed time from when the task started
 * running on a compute node to when it finished (or to the last time the
 * statistics were updated, if the task had not finished by then). If the task
 * was retried, this includes the wall clock time of all the task retries.
 * @member {number} readIOps The total number of disk read operations made by
 * the task.
 * @member {number} writeIOps The total number of disk write operations made by
 * the task.
 * @member {number} readIOGiB The total gibibytes read from disk by the task.
 * @member {number} writeIOGiB The total gibibytes written to disk by the task.
 * @member {moment.duration} waitTime The total wait time of the task. The wait
 * time for a task is defined as the elapsed time between the creation of the
 * task and the start of task execution. (If the task is retried due to
 * failures, the wait time is the time to the most recent task execution.).
 */
export interface TaskStatistics {
    url: string;
    startTime: Date;
    lastUpdateTime: Date;
    userCPUTime: moment.Duration;
    kernelCPUTime: moment.Duration;
    wallClockTime: moment.Duration;
    readIOps: number;
    writeIOps: number;
    readIOGiB: number;
    writeIOGiB: number;
    waitTime: moment.Duration;
}
/**
 * @class
 * Initializes a new instance of the TaskIdRange class.
 * @constructor
 * @summary A range of task IDs that a task can depend on. All tasks with IDs
 * in the range must complete successfully before the dependent task can be
 * scheduled.
 *
 * The start and end of the range are inclusive. For example, if a range has
 * start 9 and end 12, then it represents tasks '9', '10', '11' and '12'.
 *
 * @member {number} start The first task ID in the range.
 * @member {number} end The last task ID in the range.
 */
export interface TaskIdRange {
    start: number;
    end: number;
}
/**
 * @class
 * Initializes a new instance of the TaskDependencies class.
 * @constructor
 * @summary Specifies any dependencies of a task. Any task that is explicitly
 * specified or within a dependency range must complete before the dependant
 * task will be scheduled.
 *
 * @member {array} [taskIds] The list of task IDs that this task depends on.
 * All tasks in this list must complete successfully before the dependent task
 * can be scheduled. The taskIds collection is limited to 64000 characters
 * total (i.e. the combined length of all task IDs). If the taskIds collection
 * exceeds the maximum length, the Add Task request fails with error code
 * TaskDependencyListTooLong. In this case consider using task ID ranges
 * instead.
 * @member {array} [taskIdRanges] The list of task ID ranges that this task
 * depends on. All tasks in all ranges must complete successfully before the
 * dependent task can be scheduled.
 */
export interface TaskDependencies {
    taskIds?: string[];
    taskIdRanges?: TaskIdRange[];
}
/**
 * @class
 * Initializes a new instance of the CloudTask class.
 * @constructor
 * @summary An Azure Batch task.
 *
 * @member {string} [id] A string that uniquely identifies the task within the
 * job. The ID can contain any combination of alphanumeric characters including
 * hyphens and underscores, and cannot contain more than 64 characters.
 * @member {string} [displayName] A display name for the task. The display name
 * need not be unique and can contain any Unicode characters up to a maximum
 * length of 1024.
 * @member {string} [url] The URL of the task.
 * @member {string} [eTag] The ETag of the task. This is an opaque string. You
 * can use it to detect whether the task has changed between requests. In
 * particular, you can be pass the ETag when updating a task to specify that
 * your changes should take effect only if nobody else has modified the task in
 * the meantime.
 * @member {date} [lastModified] The last modified time of the task.
 * @member {date} [creationTime] The creation time of the task.
 * @member {object} [exitConditions] How the Batch service should respond when
 * the task completes.
 * @member {array} [exitConditions.exitCodes]
 * @member {array} [exitConditions.exitCodeRanges]
 * @member {object} [exitConditions.preProcessingError]
 * @member {string} [exitConditions.preProcessingError.jobAction] Values are:
 *
 * none - Take no action.
 * disable - Disable the job. This is equivalent to calling the disable job
 * API, with a disableTasks value of requeue.
 * terminate - Terminate the job. The terminateReason in the job's
 * executionInfo is set to "TaskFailed". The default is none for exit code 0
 * and terminate for all other exit conditions.
 *
 * If the job's onTaskFailed property is noAction, then specifying this
 * property returns an error and the add task request fails with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request). Possible values include: 'none',
 * 'disable', 'terminate'
 * @member {string} [exitConditions.preProcessingError.dependencyAction] Values
 * are:
 *
 * satisfy - Satisfy the task's dependencies.
 * block - Block the task's dependencies.
 *
 * The default is 'satisfy' for exit code 0, and 'block' for all other exit
 * conditions. If the job's usesTaskDependencies property is set to false, then
 * specifying the dependencyAction property returns an erro and the add task
 * request fails with an invalid property value error; if you are calling the
 * REST API directly, the HTTP status code is 400  (Bad Request). Possible
 * values include: 'satisfy', 'block'
 * @member {object} [exitConditions.fileUploadError] If the task exited with an
 * exit code that was specified via exitCodes or exitCodeRanges, and then
 * encountered a file upload error, then the action specified by the exit code
 * takes precedence.
 * @member {string} [exitConditions.fileUploadError.jobAction] Values are:
 *
 * none - Take no action.
 * disable - Disable the job. This is equivalent to calling the disable job
 * API, with a disableTasks value of requeue.
 * terminate - Terminate the job. The terminateReason in the job's
 * executionInfo is set to "TaskFailed". The default is none for exit code 0
 * and terminate for all other exit conditions.
 *
 * If the job's onTaskFailed property is noAction, then specifying this
 * property returns an error and the add task request fails with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request). Possible values include: 'none',
 * 'disable', 'terminate'
 * @member {string} [exitConditions.fileUploadError.dependencyAction] Values
 * are:
 *
 * satisfy - Satisfy the task's dependencies.
 * block - Block the task's dependencies.
 *
 * The default is 'satisfy' for exit code 0, and 'block' for all other exit
 * conditions. If the job's usesTaskDependencies property is set to false, then
 * specifying the dependencyAction property returns an erro and the add task
 * request fails with an invalid property value error; if you are calling the
 * REST API directly, the HTTP status code is 400  (Bad Request). Possible
 * values include: 'satisfy', 'block'
 * @member {object} [exitConditions.default] This value is used if the task
 * exits with any nonzero exit code not listed in the exitCodes or
 * exitCodeRanges collection, with a pre-processing error if the
 * preProcessingError property is not present, or with a file upload error if
 * the fileUploadError property is not present. If you want non-default
 * behaviour on exit code 0, you must list it explicitly using the exitCodes or
 * exitCodeRanges collection.
 * @member {string} [exitConditions.default.jobAction] Values are:
 *
 * none - Take no action.
 * disable - Disable the job. This is equivalent to calling the disable job
 * API, with a disableTasks value of requeue.
 * terminate - Terminate the job. The terminateReason in the job's
 * executionInfo is set to "TaskFailed". The default is none for exit code 0
 * and terminate for all other exit conditions.
 *
 * If the job's onTaskFailed property is noAction, then specifying this
 * property returns an error and the add task request fails with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request). Possible values include: 'none',
 * 'disable', 'terminate'
 * @member {string} [exitConditions.default.dependencyAction] Values are:
 *
 * satisfy - Satisfy the task's dependencies.
 * block - Block the task's dependencies.
 *
 * The default is 'satisfy' for exit code 0, and 'block' for all other exit
 * conditions. If the job's usesTaskDependencies property is set to false, then
 * specifying the dependencyAction property returns an erro and the add task
 * request fails with an invalid property value error; if you are calling the
 * REST API directly, the HTTP status code is 400  (Bad Request). Possible
 * values include: 'satisfy', 'block'
 * @member {string} [state] The current state of the task. Possible values
 * include: 'active', 'preparing', 'running', 'completed'
 * @member {date} [stateTransitionTime] The time at which the task entered its
 * current state.
 * @member {string} [previousState] The previous state of the task. This
 * property is not set if the task is in its initial Active state. Possible
 * values include: 'active', 'preparing', 'running', 'completed'
 * @member {date} [previousStateTransitionTime] The time at which the task
 * entered its previous state. This property is not set if the task is in its
 * initial Active state.
 * @member {string} [commandLine] The command line of the task. For
 * multi-instance tasks, the command line is executed as the primary task,
 * after the primary task and all subtasks have finished executing the
 * coordination command line. The command line does not run under a shell, and
 * therefore cannot take advantage of shell features such as environment
 * variable expansion. If you want to take advantage of such features, you
 * should invoke the shell in the command line, for example using "cmd /c
 * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [resourceFiles] A list of files that the Batch service will
 * download to the compute node before running the command line. For
 * multi-instance tasks, the resource files will only be downloaded to the
 * compute node on which the primary task is executed.
 * @member {array} [outputFiles] A list of files that the Batch service will
 * upload from the compute node after running the command line. For
 * multi-instance tasks, the files will only be uploaded from the compute node
 * on which the primary task is executed.
 * @member {array} [environmentSettings] A list of environment variable
 * settings for the task.
 * @member {object} [affinityInfo] A locality hint that can be used by the
 * Batch service to select a compute node on which to start the new task.
 * @member {string} [affinityInfo.affinityId] You can pass the affinityId of a
 * compute node to indicate that this task needs to run on that compute node.
 * Note that this is just a soft affinity. If the target node is busy or
 * unavailable at the time the task is scheduled, then the task will be
 * scheduled elsewhere.
 * @member {object} [constraints] The execution constraints that apply to this
 * task.
 * @member {moment.duration} [constraints.maxWallClockTime] If this is not
 * specified, there is no time limit on how long the task may run.
 * @member {moment.duration} [constraints.retentionTime] The default is
 * infinite, i.e. the task directory will be retained until the compute node is
 * removed or reimaged.
 * @member {number} [constraints.maxTaskRetryCount] Note that this value
 * specifically controls the number of retries. The Batch service will try the
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * the task. If the maximum retry count is -1, the Batch service retries the
 * task without limit.
 * @member {object} [userIdentity] The user identity under which the task runs.
 * If omitted, the task runs as a non-administrative user unique to the task.
 * @member {string} [userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {object} [userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {string} [userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [userIdentity.autoUser.elevationLevel] nonAdmin - The auto
 * user is a standard user without elevated access. admin - The auto user is a
 * user with elevated access and operates with full Administrator permissions.
 * The default value is nonAdmin. Possible values include: 'nonAdmin', 'admin'
 * @member {object} [executionInfo] Information about the execution of the
 * task.
 * @member {date} [executionInfo.startTime] 'Running' corresponds to the
 * running state, so if the task specifies resource files or application
 * packages, then the start time reflects the time at which the task started
 * downloading or deploying these. If the task has been restarted or retried,
 * this is the most recent time at which the task started running. This
 * property is present only for tasks that are in the running or completed
 * state.
 * @member {date} [executionInfo.endTime] This property is set only if the task
 * is in the Completed state.
 * @member {number} [executionInfo.exitCode] This property is set only if the
 * task is in the completed state. In general, the exit code for a process
 * reflects the specific convention implemented by the application developer
 * for that process. If you use the exit code value to make decisions in your
 * code, be sure that you know the exit code convention used by the application
 * process. However, if the Batch service terminates the task (due to timeout,
 * or user termination via the API) you may see an operating system-defined
 * exit code.
 * @member {object} [executionInfo.failureInfo] This property is set only if
 * the task is in the completed state and encountered a failure.
 * @member {string} [executionInfo.failureInfo.category] Possible values
 * include: 'userError', 'serverError'
 * @member {string} [executionInfo.failureInfo.code]
 * @member {string} [executionInfo.failureInfo.message]
 * @member {array} [executionInfo.failureInfo.details]
 * @member {number} [executionInfo.retryCount] Task application failures
 * (non-zero exit code) are retried, pre-processing errors (the task could not
 * be run) and file upload errors are not retried. The Batch service will retry
 * the task up to the limit specified by the constraints.
 * @member {date} [executionInfo.lastRetryTime] This element is present only if
 * the task was retried (i.e. retryCount is nonzero). If present, this is
 * typically the same as startTime, but may be different if the task has been
 * restarted for reasons other than retry; for example, if the compute node was
 * rebooted during a retry, then the startTime is updated but the lastRetryTime
 * is not.
 * @member {number} [executionInfo.requeueCount] When the user removes nodes
 * from a pool (by resizing/shrinking the pool) or when the job is being
 * disabled, the user can specify that running tasks on the nodes be requeued
 * for execution. This count tracks how many times the task has been requeued
 * for these reasons.
 * @member {date} [executionInfo.lastRequeueTime] This property is set only if
 * the requeueCount is nonzero.
 * @member {string} [executionInfo.result] If the value is 'failed', then the
 * details of the failure can be found in the failureInfo property. Possible
 * values include: 'success', 'failure'
 * @member {object} [nodeInfo] Information about the compute node on which the
 * task ran.
 * @member {string} [nodeInfo.affinityId]
 * @member {string} [nodeInfo.nodeUrl]
 * @member {string} [nodeInfo.poolId]
 * @member {string} [nodeInfo.nodeId]
 * @member {string} [nodeInfo.taskRootDirectory]
 * @member {string} [nodeInfo.taskRootDirectoryUrl]
 * @member {object} [multiInstanceSettings] An object that indicates that the
 * task is a multi-instance task, and contains information about how to run the
 * multi-instance task.
 * @member {number} [multiInstanceSettings.numberOfInstances]
 * @member {string} [multiInstanceSettings.coordinationCommandLine] A typical
 * coordination command line launches a background service and verifies that
 * the service is ready to process inter-node messages.
 * @member {array} [multiInstanceSettings.commonResourceFiles] The difference
 * between common resource files and task resource files is that common
 * resource files are downloaded for all subtasks including the primary,
 * whereas task resource files are downloaded only for the primary. Also note
 * that these resource files are not downloaded to the task working directory,
 * but instead are downloaded to the task root directory (one directory above
 * the working directory).
 * @member {object} [stats] Resource usage statistics for the task.
 * @member {string} [stats.url]
 * @member {date} [stats.startTime]
 * @member {date} [stats.lastUpdateTime]
 * @member {moment.duration} [stats.userCPUTime]
 * @member {moment.duration} [stats.kernelCPUTime]
 * @member {moment.duration} [stats.wallClockTime] The wall clock time is the
 * elapsed time from when the task started running on a compute node to when it
 * finished (or to the last time the statistics were updated, if the task had
 * not finished by then). If the task was retried, this includes the wall clock
 * time of all the task retries.
 * @member {number} [stats.readIOps]
 * @member {number} [stats.writeIOps]
 * @member {number} [stats.readIOGiB]
 * @member {number} [stats.writeIOGiB]
 * @member {moment.duration} [stats.waitTime]
 * @member {object} [dependsOn] The tasks that this task depends on. This task
 * will not be scheduled until all tasks that it depends on have completed
 * successfully. If any of those tasks fail and exhaust their retry counts,
 * this task will never be scheduled.
 * @member {array} [dependsOn.taskIds] The taskIds collection is limited to
 * 64000 characters total (i.e. the combined length of all task IDs). If the
 * taskIds collection exceeds the maximum length, the Add Task request fails
 * with error code TaskDependencyListTooLong. In this case consider using task
 * ID ranges instead.
 * @member {array} [dependsOn.taskIdRanges]
 * @member {array} [applicationPackageReferences] A list of application
 * packages that the Batch service will deploy to the compute node before
 * running the command line. Application packages are downloaded and deployed
 * to a shared directory, not the task working directory. Therefore, if a
 * referenced package is already on the compute node, and is up to date, then
 * it is not re-downloaded; the existing copy on the compute node is used. If a
 * referenced application package cannot be installed, for example because the
 * package has been deleted or because download failed, the task fails.
 * @member {object} [authenticationTokenSettings] The settings for an
 * authentication token that the task can use to perform Batch service
 * operations. If this property is set, the Batch service provides the task
 * with an authentication token which can be used to authenticate Batch service
 * operations without requiring an account access key. The token is provided
 * via the AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations
 * that the task can carry out using the token depend on the settings. For
 * example, a task can request job permissions in order to add other tasks to
 * the job, or check the status of the job or of other tasks under the job.
 * @member {array} [authenticationTokenSettings.access] The authentication
 * token grants access to a limited set of Batch service operations. Currently
 * the only supported value for the access property is 'job', which grants
 * access to all operations related to the job which contains the task.
 */
export interface CloudTask {
    id?: string;
    displayName?: string;
    url?: string;
    eTag?: string;
    lastModified?: Date;
    creationTime?: Date;
    exitConditions?: ExitConditions;
    state?: string;
    stateTransitionTime?: Date;
    previousState?: string;
    previousStateTransitionTime?: Date;
    commandLine?: string;
    resourceFiles?: ResourceFile[];
    outputFiles?: OutputFile[];
    environmentSettings?: EnvironmentSetting[];
    affinityInfo?: AffinityInformation;
    constraints?: TaskConstraints;
    userIdentity?: UserIdentity;
    executionInfo?: TaskExecutionInformation;
    nodeInfo?: ComputeNodeInformation;
    multiInstanceSettings?: MultiInstanceSettings;
    stats?: TaskStatistics;
    dependsOn?: TaskDependencies;
    applicationPackageReferences?: ApplicationPackageReference[];
    authenticationTokenSettings?: AuthenticationTokenSettings;
}
/**
 * @class
 * Initializes a new instance of the TaskAddParameter class.
 * @constructor
 * @summary An Azure Batch task to add.
 *
 * @member {string} id A string that uniquely identifies the task within the
 * job. The ID can contain any combination of alphanumeric characters including
 * hyphens and underscores, and cannot contain more than 64 characters. The ID
 * is case-preserving and case-insensitive (that is, you may not have two IDs
 * within a job that differ only by case).
 * @member {string} [displayName] A display name for the task. The display name
 * need not be unique and can contain any Unicode characters up to a maximum
 * length of 1024.
 * @member {string} commandLine The command line of the task. For
 * multi-instance tasks, the command line is executed as the primary task,
 * after the primary task and all subtasks have finished executing the
 * coordination command line. The command line does not run under a shell, and
 * therefore cannot take advantage of shell features such as environment
 * variable expansion. If you want to take advantage of such features, you
 * should invoke the shell in the command line, for example using "cmd /c
 * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {object} [exitConditions] How the Batch service should respond when
 * the task completes.
 * @member {array} [exitConditions.exitCodes]
 * @member {array} [exitConditions.exitCodeRanges]
 * @member {object} [exitConditions.preProcessingError]
 * @member {string} [exitConditions.preProcessingError.jobAction] Values are:
 *
 * none - Take no action.
 * disable - Disable the job. This is equivalent to calling the disable job
 * API, with a disableTasks value of requeue.
 * terminate - Terminate the job. The terminateReason in the job's
 * executionInfo is set to "TaskFailed". The default is none for exit code 0
 * and terminate for all other exit conditions.
 *
 * If the job's onTaskFailed property is noAction, then specifying this
 * property returns an error and the add task request fails with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request). Possible values include: 'none',
 * 'disable', 'terminate'
 * @member {string} [exitConditions.preProcessingError.dependencyAction] Values
 * are:
 *
 * satisfy - Satisfy the task's dependencies.
 * block - Block the task's dependencies.
 *
 * The default is 'satisfy' for exit code 0, and 'block' for all other exit
 * conditions. If the job's usesTaskDependencies property is set to false, then
 * specifying the dependencyAction property returns an erro and the add task
 * request fails with an invalid property value error; if you are calling the
 * REST API directly, the HTTP status code is 400  (Bad Request). Possible
 * values include: 'satisfy', 'block'
 * @member {object} [exitConditions.fileUploadError] If the task exited with an
 * exit code that was specified via exitCodes or exitCodeRanges, and then
 * encountered a file upload error, then the action specified by the exit code
 * takes precedence.
 * @member {string} [exitConditions.fileUploadError.jobAction] Values are:
 *
 * none - Take no action.
 * disable - Disable the job. This is equivalent to calling the disable job
 * API, with a disableTasks value of requeue.
 * terminate - Terminate the job. The terminateReason in the job's
 * executionInfo is set to "TaskFailed". The default is none for exit code 0
 * and terminate for all other exit conditions.
 *
 * If the job's onTaskFailed property is noAction, then specifying this
 * property returns an error and the add task request fails with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request). Possible values include: 'none',
 * 'disable', 'terminate'
 * @member {string} [exitConditions.fileUploadError.dependencyAction] Values
 * are:
 *
 * satisfy - Satisfy the task's dependencies.
 * block - Block the task's dependencies.
 *
 * The default is 'satisfy' for exit code 0, and 'block' for all other exit
 * conditions. If the job's usesTaskDependencies property is set to false, then
 * specifying the dependencyAction property returns an erro and the add task
 * request fails with an invalid property value error; if you are calling the
 * REST API directly, the HTTP status code is 400  (Bad Request). Possible
 * values include: 'satisfy', 'block'
 * @member {object} [exitConditions.default] This value is used if the task
 * exits with any nonzero exit code not listed in the exitCodes or
 * exitCodeRanges collection, with a pre-processing error if the
 * preProcessingError property is not present, or with a file upload error if
 * the fileUploadError property is not present. If you want non-default
 * behaviour on exit code 0, you must list it explicitly using the exitCodes or
 * exitCodeRanges collection.
 * @member {string} [exitConditions.default.jobAction] Values are:
 *
 * none - Take no action.
 * disable - Disable the job. This is equivalent to calling the disable job
 * API, with a disableTasks value of requeue.
 * terminate - Terminate the job. The terminateReason in the job's
 * executionInfo is set to "TaskFailed". The default is none for exit code 0
 * and terminate for all other exit conditions.
 *
 * If the job's onTaskFailed property is noAction, then specifying this
 * property returns an error and the add task request fails with an invalid
 * property value error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request). Possible values include: 'none',
 * 'disable', 'terminate'
 * @member {string} [exitConditions.default.dependencyAction] Values are:
 *
 * satisfy - Satisfy the task's dependencies.
 * block - Block the task's dependencies.
 *
 * The default is 'satisfy' for exit code 0, and 'block' for all other exit
 * conditions. If the job's usesTaskDependencies property is set to false, then
 * specifying the dependencyAction property returns an erro and the add task
 * request fails with an invalid property value error; if you are calling the
 * REST API directly, the HTTP status code is 400  (Bad Request). Possible
 * values include: 'satisfy', 'block'
 * @member {array} [resourceFiles] A list of files that the Batch service will
 * download to the compute node before running the command line. For
 * multi-instance tasks, the resource files will only be downloaded to the
 * compute node on which the primary task is executed.
 * @member {array} [outputFiles] A list of files that the Batch service will
 * upload from the compute node after running the command line. For
 * multi-instance tasks, the files will only be uploaded from the compute node
 * on which the primary task is executed.
 * @member {array} [environmentSettings] A list of environment variable
 * settings for the task.
 * @member {object} [affinityInfo] A locality hint that can be used by the
 * Batch service to select a compute node on which to start the new task.
 * @member {string} [affinityInfo.affinityId] You can pass the affinityId of a
 * compute node to indicate that this task needs to run on that compute node.
 * Note that this is just a soft affinity. If the target node is busy or
 * unavailable at the time the task is scheduled, then the task will be
 * scheduled elsewhere.
 * @member {object} [constraints] The execution constraints that apply to this
 * task. If you do not specify constraints, the maxTaskRetryCount is the
 * maxTaskRetryCount specified for the job, and the maxWallClockTime and
 * retentionTime are infinite.
 * @member {moment.duration} [constraints.maxWallClockTime] If this is not
 * specified, there is no time limit on how long the task may run.
 * @member {moment.duration} [constraints.retentionTime] The default is
 * infinite, i.e. the task directory will be retained until the compute node is
 * removed or reimaged.
 * @member {number} [constraints.maxTaskRetryCount] Note that this value
 * specifically controls the number of retries. The Batch service will try the
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * the task. If the maximum retry count is -1, the Batch service retries the
 * task without limit.
 * @member {object} [userIdentity] The user identity under which the task runs.
 * If omitted, the task runs as a non-administrative user unique to the task.
 * @member {string} [userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {object} [userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {string} [userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [userIdentity.autoUser.elevationLevel] nonAdmin - The auto
 * user is a standard user without elevated access. admin - The auto user is a
 * user with elevated access and operates with full Administrator permissions.
 * The default value is nonAdmin. Possible values include: 'nonAdmin', 'admin'
 * @member {object} [multiInstanceSettings] An object that indicates that the
 * task is a multi-instance task, and contains information about how to run the
 * multi-instance task.
 * @member {number} [multiInstanceSettings.numberOfInstances]
 * @member {string} [multiInstanceSettings.coordinationCommandLine] A typical
 * coordination command line launches a background service and verifies that
 * the service is ready to process inter-node messages.
 * @member {array} [multiInstanceSettings.commonResourceFiles] The difference
 * between common resource files and task resource files is that common
 * resource files are downloaded for all subtasks including the primary,
 * whereas task resource files are downloaded only for the primary. Also note
 * that these resource files are not downloaded to the task working directory,
 * but instead are downloaded to the task root directory (one directory above
 * the working directory).
 * @member {object} [dependsOn] The tasks that this task depends on. This task
 * will not be scheduled until all tasks that it depends on have completed
 * successfully. If any of those tasks fail and exhaust their retry counts,
 * this task will never be scheduled. If the job does not have
 * usesTaskDependencies set to true, and this element is present, the request
 * fails with error code TaskDependenciesNotSpecifiedOnJob.
 * @member {array} [dependsOn.taskIds] The taskIds collection is limited to
 * 64000 characters total (i.e. the combined length of all task IDs). If the
 * taskIds collection exceeds the maximum length, the Add Task request fails
 * with error code TaskDependencyListTooLong. In this case consider using task
 * ID ranges instead.
 * @member {array} [dependsOn.taskIdRanges]
 * @member {array} [applicationPackageReferences] A list of application
 * packages that the Batch service will deploy to the compute node before
 * running the command line. Application packages are downloaded and deployed
 * to a shared directory, not the task working directory. Therefore, if a
 * referenced package is already on the compute node, and is up to date, then
 * it is not re-downloaded; the existing copy on the compute node is used. If a
 * referenced application package cannot be installed, for example because the
 * package has been deleted or because download failed, the task fails.
 * @member {object} [authenticationTokenSettings] The settings for an
 * authentication token that the task can use to perform Batch service
 * operations. If this property is set, the Batch service provides the task
 * with an authentication token which can be used to authenticate Batch service
 * operations without requiring an account access key. The token is provided
 * via the AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations
 * that the task can carry out using the token depend on the settings. For
 * example, a task can request job permissions in order to add other tasks to
 * the job, or check the status of the job or of other tasks under the job.
 * @member {array} [authenticationTokenSettings.access] The authentication
 * token grants access to a limited set of Batch service operations. Currently
 * the only supported value for the access property is 'job', which grants
 * access to all operations related to the job which contains the task.
 */
export interface TaskAddParameter {
    id: string;
    displayName?: string;
    commandLine: string;
    exitConditions?: ExitConditions;
    resourceFiles?: ResourceFile[];
    outputFiles?: OutputFile[];
    environmentSettings?: EnvironmentSetting[];
    affinityInfo?: AffinityInformation;
    constraints?: TaskConstraints;
    userIdentity?: UserIdentity;
    multiInstanceSettings?: MultiInstanceSettings;
    dependsOn?: TaskDependencies;
    applicationPackageReferences?: ApplicationPackageReference[];
    authenticationTokenSettings?: AuthenticationTokenSettings;
}
/**
 * @class
 * Initializes a new instance of the TaskAddCollectionParameter class.
 * @constructor
 * @summary A collection of Azure Batch tasks to add.
 *
 * @member {array} value The collection of tasks to add. The total serialized
 * size of this collection must be less than 4MB. If it is greater than 4MB
 * (for example if each task has 100's of resource files or environment
 * variables), the request will fail with code 'RequestBodyTooLarge' and should
 * be retried again with fewer tasks.
 */
export interface TaskAddCollectionParameter {
    value: TaskAddParameter[];
}
/**
 * @class
 * Initializes a new instance of the ErrorMessage class.
 * @constructor
 * @summary An error message received in an Azure Batch error response.
 *
 * @member {string} [lang] The language code of the error message.
 * @member {string} [value] The text of the message.
 */
export interface ErrorMessage {
    lang?: string;
    value?: string;
}
/**
 * @class
 * Initializes a new instance of the BatchErrorDetail class.
 * @constructor
 * @summary An item of additional information included in an Azure Batch error
 * response.
 *
 * @member {string} [key] An identifier specifying the meaning of the Value
 * property.
 * @member {string} [value] The additional information included with the error
 * response.
 */
export interface BatchErrorDetail {
    key?: string;
    value?: string;
}
/**
 * @class
 * Initializes a new instance of the BatchError class.
 * @constructor
 * @summary An error response received from the Azure Batch service.
 *
 * @member {string} [code] An identifier for the error. Codes are invariant and
 * are intended to be consumed programmatically.
 * @member {object} [message] A message describing the error, intended to be
 * suitable for display in a user interface.
 * @member {string} [message.lang]
 * @member {string} [message.value]
 * @member {array} [values] A collection of key-value pairs containing
 * additional details about the error.
 */
export interface BatchError {
    code?: string;
    message?: ErrorMessage;
    values?: BatchErrorDetail[];
}
/**
 * @class
 * Initializes a new instance of the TaskAddResult class.
 * @constructor
 * @summary Result for a single task added as part of an add task collection
 * operation.
 *
 * @member {string} status The status of the add task request. Values are:
 *
 * success - Task was added successfully.
 * clienterror - Task failed to add due to a client error and should not be
 * retried without modifying the request as appropriate.
 * servererror - Task failed to add due to a server error and can be retried
 * without modification. Possible values include: 'success', 'clientError',
 * 'serverError'
 * @member {string} taskId The ID of the task for which this is the result.
 * @member {string} [eTag] The ETag of the task, if the task was successfully
 * added. You can use this to detect whether the task has changed between
 * requests. In particular, you can be pass the ETag with an Update Task
 * request to specify that your changes should take effect only if nobody else
 * has modified the job in the meantime.
 * @member {date} [lastModified] The last modified time of the task.
 * @member {string} [location] The URL of the task, if the task was
 * successfully added.
 * @member {object} [error] The error encountered while attempting to add the
 * task.
 * @member {string} [error.code]
 * @member {object} [error.message]
 * @member {string} [error.message.lang]
 * @member {string} [error.message.value]
 * @member {array} [error.values]
 */
export interface TaskAddResult {
    status: string;
    taskId: string;
    eTag?: string;
    lastModified?: Date;
    location?: string;
    error?: BatchError;
}
/**
 * @class
 * Initializes a new instance of the TaskAddCollectionResult class.
 * @constructor
 * @summary The result of adding a collection of tasks to a job.
 *
 * @member {array} [value] The results of the add task collection operation.
 */
export interface TaskAddCollectionResult {
    value?: TaskAddResult[];
}
/**
 * @class
 * Initializes a new instance of the SubtaskInformation class.
 * @constructor
 * @summary Information about an Azure Batch subtask.
 *
 * @member {number} [id] The ID of the subtask.
 * @member {object} [nodeInfo] Information about the compute node on which the
 * subtask ran.
 * @member {string} [nodeInfo.affinityId]
 * @member {string} [nodeInfo.nodeUrl]
 * @member {string} [nodeInfo.poolId]
 * @member {string} [nodeInfo.nodeId]
 * @member {string} [nodeInfo.taskRootDirectory]
 * @member {string} [nodeInfo.taskRootDirectoryUrl]
 * @member {date} [startTime] The time at which the subtask started running. If
 * the subtask has been restarted or retried, this is the most recent time at
 * which the subtask started running.
 * @member {date} [endTime] The time at which the subtask completed. This
 * property is set only if the subtask is in the Completed state.
 * @member {number} [exitCode] The exit code of the program specified on the
 * subtask command line. This property is set only if the subtask is in the
 * completed state. In general, the exit code for a process reflects the
 * specific convention implemented by the application developer for that
 * process. If you use the exit code value to make decisions in your code, be
 * sure that you know the exit code convention used by the application process.
 * However, if the Batch service terminates the subtask (due to timeout, or
 * user termination via the API) you may see an operating system-defined exit
 * code.
 * @member {object} [failureInfo] Information describing the task failure, if
 * any. This property is set only if the task is in the completed state and
 * encountered a failure.
 * @member {string} [failureInfo.category] Possible values include:
 * 'userError', 'serverError'
 * @member {string} [failureInfo.code]
 * @member {string} [failureInfo.message]
 * @member {array} [failureInfo.details]
 * @member {string} [state] The current state of the subtask. Possible values
 * include: 'preparing', 'running', 'completed'
 * @member {date} [stateTransitionTime] The time at which the subtask entered
 * its current state.
 * @member {string} [previousState] The previous state of the subtask. This
 * property is not set if the subtask is in its initial running state. Possible
 * values include: 'preparing', 'running', 'completed'
 * @member {date} [previousStateTransitionTime] The time at which the subtask
 * entered its previous state. This property is not set if the subtask is in
 * its initial running state.
 * @member {string} [result] The result of the task execution. If the value is
 * 'failed', then the details of the failure can be found in the failureInfo
 * property. Possible values include: 'success', 'failure'
 */
export interface SubtaskInformation {
    id?: number;
    nodeInfo?: ComputeNodeInformation;
    startTime?: Date;
    endTime?: Date;
    exitCode?: number;
    failureInfo?: TaskFailureInformation;
    state?: string;
    stateTransitionTime?: Date;
    previousState?: string;
    previousStateTransitionTime?: Date;
    result?: string;
}
/**
 * @class
 * Initializes a new instance of the CloudTaskListSubtasksResult class.
 * @constructor
 * @summary The result of listing the subtasks of a task.
 *
 * @member {array} [value] The list of subtasks.
 */
export interface CloudTaskListSubtasksResult {
    value?: SubtaskInformation[];
}
/**
 * @class
 * Initializes a new instance of the TaskInformation class.
 * @constructor
 * @summary Information about a task running on a compute node.
 *
 * @member {string} [taskUrl] The URL of the task.
 * @member {string} [jobId] The ID of the job to which the task belongs.
 * @member {string} [taskId] The ID of the task.
 * @member {number} [subtaskId] The ID of the subtask if the task is a
 * multi-instance task.
 * @member {string} taskState The current state of the task. Possible values
 * include: 'active', 'preparing', 'running', 'completed'
 * @member {object} [executionInfo] Information about the execution of the
 * task.
 * @member {date} [executionInfo.startTime] 'Running' corresponds to the
 * running state, so if the task specifies resource files or application
 * packages, then the start time reflects the time at which the task started
 * downloading or deploying these. If the task has been restarted or retried,
 * this is the most recent time at which the task started running. This
 * property is present only for tasks that are in the running or completed
 * state.
 * @member {date} [executionInfo.endTime] This property is set only if the task
 * is in the Completed state.
 * @member {number} [executionInfo.exitCode] This property is set only if the
 * task is in the completed state. In general, the exit code for a process
 * reflects the specific convention implemented by the application developer
 * for that process. If you use the exit code value to make decisions in your
 * code, be sure that you know the exit code convention used by the application
 * process. However, if the Batch service terminates the task (due to timeout,
 * or user termination via the API) you may see an operating system-defined
 * exit code.
 * @member {object} [executionInfo.failureInfo] This property is set only if
 * the task is in the completed state and encountered a failure.
 * @member {string} [executionInfo.failureInfo.category] Possible values
 * include: 'userError', 'serverError'
 * @member {string} [executionInfo.failureInfo.code]
 * @member {string} [executionInfo.failureInfo.message]
 * @member {array} [executionInfo.failureInfo.details]
 * @member {number} [executionInfo.retryCount] Task application failures
 * (non-zero exit code) are retried, pre-processing errors (the task could not
 * be run) and file upload errors are not retried. The Batch service will retry
 * the task up to the limit specified by the constraints.
 * @member {date} [executionInfo.lastRetryTime] This element is present only if
 * the task was retried (i.e. retryCount is nonzero). If present, this is
 * typically the same as startTime, but may be different if the task has been
 * restarted for reasons other than retry; for example, if the compute node was
 * rebooted during a retry, then the startTime is updated but the lastRetryTime
 * is not.
 * @member {number} [executionInfo.requeueCount] When the user removes nodes
 * from a pool (by resizing/shrinking the pool) or when the job is being
 * disabled, the user can specify that running tasks on the nodes be requeued
 * for execution. This count tracks how many times the task has been requeued
 * for these reasons.
 * @member {date} [executionInfo.lastRequeueTime] This property is set only if
 * the requeueCount is nonzero.
 * @member {string} [executionInfo.result] If the value is 'failed', then the
 * details of the failure can be found in the failureInfo property. Possible
 * values include: 'success', 'failure'
 */
export interface TaskInformation {
    taskUrl?: string;
    jobId?: string;
    taskId?: string;
    subtaskId?: number;
    taskState: string;
    executionInfo?: TaskExecutionInformation;
}
/**
 * @class
 * Initializes a new instance of the StartTaskInformation class.
 * @constructor
 * @summary Information about a start task running on a compute node.
 *
 * @member {string} state The state of the start task on the compute node.
 * Values are:
 *
 * running - The start task is currently running.
 * completed - The start task has exited with exit code 0, or the start task
 * has failed and the retry limit has reached, or the start task process did
 * not run due to task preparation errors (such as resource file download
 * failures). Possible values include: 'running', 'completed'
 * @member {date} startTime The time at which the start task started running.
 * This value is reset every time the task is restarted or retried (that is,
 * this is the most recent time at which the start task started running).
 * @member {date} [endTime] The time at which the start task stopped running.
 * This is the end time of the most recent run of the start task, if that run
 * has completed (even if that run failed and a retry is pending). This element
 * is not present if the start task is currently running.
 * @member {number} [exitCode] The exit code of the program specified on the
 * start task command line. This property is set only if the start task is in
 * the completed state. In general, the exit code for a process reflects the
 * specific convention implemented by the application developer for that
 * process. If you use the exit code value to make decisions in your code, be
 * sure that you know the exit code convention used by the application process.
 * However, if the Batch service terminates the start task (due to timeout, or
 * user termination via the API) you may see an operating system-defined exit
 * code.
 * @member {object} [failureInfo] Information describing the task failure, if
 * any. This property is set only if the task is in the completed state and
 * encountered a failure.
 * @member {string} [failureInfo.category] Possible values include:
 * 'userError', 'serverError'
 * @member {string} [failureInfo.code]
 * @member {string} [failureInfo.message]
 * @member {array} [failureInfo.details]
 * @member {number} retryCount The number of times the task has been retried by
 * the Batch service. Task application failures (non-zero exit code) are
 * retried, pre-processing errors (the task could not be run) and file upload
 * errors are not retried. The Batch service will retry the task up to the
 * limit specified by the constraints.
 * @member {date} [lastRetryTime] The most recent time at which a retry of the
 * task started running. This element is present only if the task was retried
 * (i.e. retryCount is nonzero). If present, this is typically the same as
 * startTime, but may be different if the task has been restarted for reasons
 * other than retry; for example, if the compute node was rebooted during a
 * retry, then the startTime is updated but the lastRetryTime is not.
 * @member {string} [result] The result of the task execution. If the value is
 * 'failed', then the details of the failure can be found in the failureInfo
 * property. Possible values include: 'success', 'failure'
 */
export interface StartTaskInformation {
    state: string;
    startTime: Date;
    endTime?: Date;
    exitCode?: number;
    failureInfo?: TaskFailureInformation;
    retryCount: number;
    lastRetryTime?: Date;
    result?: string;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeError class.
 * @constructor
 * @summary An error encountered by a compute node.
 *
 * @member {string} [code] An identifier for the compute node error. Codes are
 * invariant and are intended to be consumed programmatically.
 * @member {string} [message] A message describing the compute node error,
 * intended to be suitable for display in a user interface.
 * @member {array} [errorDetails] The list of additional error details related
 * to the compute node error.
 */
export interface ComputeNodeError {
    code?: string;
    message?: string;
    errorDetails?: NameValuePair[];
}
/**
 * @class
 * Initializes a new instance of the InboundEndpoint class.
 * @constructor
 * @summary An inbound endpoint on a compute node.
 *
 * @member {string} name The name of the endpoint.
 * @member {string} protocol The protocol of the endpoint. Possible values
 * include: 'tcp', 'udp'
 * @member {string} publicIPAddress The public IP address of the compute node.
 * @member {string} publicFQDN The public fully qualified domain name for the
 * compute node.
 * @member {number} frontendPort The public port number of the endpoint.
 * @member {number} backendPort The backend port number of the endpoint.
 */
export interface InboundEndpoint {
    name: string;
    protocol: string;
    publicIPAddress: string;
    publicFQDN: string;
    frontendPort: number;
    backendPort: number;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeEndpointConfiguration class.
 * @constructor
 * @summary The endpoint configuration for the compute node.
 *
 * @member {array} inboundEndpoints The list of inbound endpoints that are
 * accessible on the compute node.
 */
export interface ComputeNodeEndpointConfiguration {
    inboundEndpoints: InboundEndpoint[];
}
/**
 * @class
 * Initializes a new instance of the ComputeNode class.
 * @constructor
 * @summary A compute node in the Batch service.
 *
 * @member {string} [id] The ID of the compute node. Every node that is added
 * to a pool is assigned a unique ID. Whenever a node is removed from a pool,
 * all of its local files are deleted, and the ID is reclaimed and could be
 * reused for new nodes.
 * @member {string} [url] The URL of the compute node.
 * @member {string} [state] The current state of the compute node. Values are:
 *
 * idle - The node is not currently running a task.
 * rebooting - The node is rebooting.
 * reimaging - The node is reimaging.
 * running - The node is running one or more tasks (other than a start task).
 * unusable - The node cannot be used for task execution due to errors.
 * creating - The Batch service has obtained the underlying virtual machine
 * from Azure Compute, but it has not yet started to join the pool.
 * starting - the Batch service is starting on the underlying virtual machine.
 * waitingforstarttask - The start task has started running on the compute
 * node, but waitForSuccess is set and the start task has not yet completed.
 * starttaskfailed - The start task has failed on the compute node (and
 * exhausted all retries), and waitForSuccess is set. The node is not usable
 * for running tasks.
 * unknown - The Batch service has lost contact with the node, and does not
 * know its true state.
 * leavingpool - The node is leaving the pool, either because the user
 * explicitly removed it or because the pool is resizing or autoscaling down.
 * offline - The node is not currently running a task, and scheduling of new
 * tasks to the node is disabled.
 * preempted - The low-priority node has been preempted. Tasks which were
 * running on the node when it was pre-empted will be rescheduled when another
 * node becomes available. Possible values include: 'idle', 'rebooting',
 * 'reimaging', 'running', 'unusable', 'creating', 'starting',
 * 'waitingForStartTask', 'startTaskFailed', 'unknown', 'leavingPool',
 * 'offline', 'preempted'
 * @member {string} [schedulingState] Whether the compute node is available for
 * task scheduling. Values are:
 *
 * enabled - Tasks can be scheduled on the node.
 * disabled - No new tasks will be scheduled on the node. Tasks already running
 * on the node may still run to completion. All nodes start with scheduling
 * enabled. Possible values include: 'enabled', 'disabled'
 * @member {date} [stateTransitionTime] The time at which the compute node
 * entered its current state.
 * @member {date} [lastBootTime] The time at which the compute node was
 * started. This property may not be present if the node state is unusable.
 * @member {date} [allocationTime] The time at which this compute node was
 * allocated to the pool.
 * @member {string} [ipAddress] The IP address that other compute nodes can use
 * to communicate with this compute node. Every node that is added to a pool is
 * assigned a unique IP address. Whenever a node is removed from a pool, all of
 * its local files are deleted, and the IP address is reclaimed and could be
 * reused for new nodes.
 * @member {string} [affinityId] An identifier which can be passed when adding
 * a task to request that the task be scheduled on this node. Note that this is
 * just a soft affinity. If the target node is busy or unavailable at the time
 * the task is scheduled, then the task will be scheduled elsewhere.
 * @member {string} [vmSize] The size of the virtual machine hosting the
 * compute node. For information about available sizes of virtual machines for
 * Cloud Services pools (pools created with cloudServiceConfiguration), see
 * Sizes for Cloud Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {number} [totalTasksRun] The total number of job tasks completed on
 * the compute node. This includes Job Preparation, Job Release and Job Manager
 * tasks, but not the pool start task.
 * @member {number} [runningTasksCount] The total number of currently running
 * job tasks on the compute node. This includes Job Preparation, Job Release,
 * and Job Manager tasks, but not the pool start task.
 * @member {number} [totalTasksSucceeded] The total number of job tasks which
 * completed successfully (with exitCode 0) on the compute node. This includes
 * Job Preparation, Job Release, and Job Manager tasks, but not the pool start
 * task.
 * @member {array} [recentTasks] A list of tasks whose state has recently
 * changed. This property is present only if at least one task has run on this
 * node since it was assigned to the pool.
 * @member {object} [startTask] The task specified to run on the compute node
 * as it joins the pool.
 * @member {string} [startTask.commandLine] The command line does not run under
 * a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [startTask.resourceFiles] Files listed under this element
 * are located in the task's working directory.
 * @member {array} [startTask.environmentSettings]
 * @member {object} [startTask.userIdentity] If omitted, the task runs as a
 * non-administrative user unique to the task.
 * @member {string} [startTask.userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {object} [startTask.userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {string} [startTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [startTask.userIdentity.autoUser.elevationLevel] nonAdmin -
 * The auto user is a standard user without elevated access. admin - The auto
 * user is a user with elevated access and operates with full Administrator
 * permissions. The default value is nonAdmin. Possible values include:
 * 'nonAdmin', 'admin'
 * @member {number} [startTask.maxTaskRetryCount] The Batch service retries a
 * task if its exit code is nonzero. Note that this value specifically controls
 * the number of retries. The Batch service will try the task once, and may
 * then retry up to this limit. For example, if the maximum retry count is 3,
 * Batch tries the task up to 4 times (one initial try and 3 retries). If the
 * maximum retry count is 0, the Batch service does not retry the task. If the
 * maximum retry count is -1, the Batch service retries the task without limit.
 * @member {boolean} [startTask.waitForSuccess] If true and the start task
 * fails on a compute node, the Batch service retries the start task up to its
 * maximum retry count (maxTaskRetryCount). If the task has still not completed
 * successfully after all retries, then the Batch service marks the compute
 * node unusable, and will not schedule tasks to it. This condition can be
 * detected via the node state and failure info details. If false, the Batch
 * service will not wait for the start task to complete. In this case, other
 * tasks can start executing on the compute node while the start task is still
 * running; and even if the start task fails, new tasks will continue to be
 * scheduled on the node. The default is false.
 * @member {object} [startTaskInfo] Runtime information about the execution of
 * the start task on the compute node.
 * @member {string} [startTaskInfo.state] Values are:
 *
 * running - The start task is currently running.
 * completed - The start task has exited with exit code 0, or the start task
 * has failed and the retry limit has reached, or the start task process did
 * not run due to task preparation errors (such as resource file download
 * failures). Possible values include: 'running', 'completed'
 * @member {date} [startTaskInfo.startTime] This value is reset every time the
 * task is restarted or retried (that is, this is the most recent time at which
 * the start task started running).
 * @member {date} [startTaskInfo.endTime] This is the end time of the most
 * recent run of the start task, if that run has completed (even if that run
 * failed and a retry is pending). This element is not present if the start
 * task is currently running.
 * @member {number} [startTaskInfo.exitCode] This property is set only if the
 * start task is in the completed state. In general, the exit code for a
 * process reflects the specific convention implemented by the application
 * developer for that process. If you use the exit code value to make decisions
 * in your code, be sure that you know the exit code convention used by the
 * application process. However, if the Batch service terminates the start task
 * (due to timeout, or user termination via the API) you may see an operating
 * system-defined exit code.
 * @member {object} [startTaskInfo.failureInfo] This property is set only if
 * the task is in the completed state and encountered a failure.
 * @member {string} [startTaskInfo.failureInfo.category] Possible values
 * include: 'userError', 'serverError'
 * @member {string} [startTaskInfo.failureInfo.code]
 * @member {string} [startTaskInfo.failureInfo.message]
 * @member {array} [startTaskInfo.failureInfo.details]
 * @member {number} [startTaskInfo.retryCount] Task application failures
 * (non-zero exit code) are retried, pre-processing errors (the task could not
 * be run) and file upload errors are not retried. The Batch service will retry
 * the task up to the limit specified by the constraints.
 * @member {date} [startTaskInfo.lastRetryTime] This element is present only if
 * the task was retried (i.e. retryCount is nonzero). If present, this is
 * typically the same as startTime, but may be different if the task has been
 * restarted for reasons other than retry; for example, if the compute node was
 * rebooted during a retry, then the startTime is updated but the lastRetryTime
 * is not.
 * @member {string} [startTaskInfo.result] If the value is 'failed', then the
 * details of the failure can be found in the failureInfo property. Possible
 * values include: 'success', 'failure'
 * @member {array} [certificateReferences] The list of certificates installed
 * on the compute node. For Windows compute nodes, the Batch service installs
 * the certificates to the specified certificate store and location. For Linux
 * compute nodes, the certificates are stored in a directory inside the task
 * working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is
 * supplied to the task to query for this location. For certificates with
 * visibility of 'remoteUser', a 'certs' directory is created in the user's
 * home directory (e.g., /home/{user-name}/certs) and certificates are placed
 * in that directory.
 * @member {array} [errors] The list of errors that are currently being
 * encountered by the compute node.
 * @member {boolean} [isDedicated] Whether this compute node is a dedicated
 * node. If false, the node is a low-priority node.
 * @member {object} [endpointConfiguration] The endpoint configuration for the
 * compute node.
 * @member {array} [endpointConfiguration.inboundEndpoints]
 */
export interface ComputeNode {
    id?: string;
    url?: string;
    state?: string;
    schedulingState?: string;
    stateTransitionTime?: Date;
    lastBootTime?: Date;
    allocationTime?: Date;
    ipAddress?: string;
    affinityId?: string;
    vmSize?: string;
    totalTasksRun?: number;
    runningTasksCount?: number;
    totalTasksSucceeded?: number;
    recentTasks?: TaskInformation[];
    startTask?: StartTask;
    startTaskInfo?: StartTaskInformation;
    certificateReferences?: CertificateReference[];
    errors?: ComputeNodeError[];
    isDedicated?: boolean;
    endpointConfiguration?: ComputeNodeEndpointConfiguration;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeUser class.
 * @constructor
 * @summary A user account for RDP or SSH access on a compute node.
 *
 * @member {string} name The user name of the account.
 * @member {boolean} [isAdmin] Whether the account should be an administrator
 * on the compute node. The default value is false.
 * @member {date} [expiryTime] The time at which the account should expire. If
 * omitted, the default is 1 day from the current time. For Linux compute
 * nodes, the expiryTime has a precision up to a day.
 * @member {string} [password] The password of the account. The password is
 * required for Windows nodes (those created with 'cloudServiceConfiguration',
 * or created with 'virtualMachineConfiguration' using a Windows image
 * reference). For Linux compute nodes, the password can optionally be
 * specified along with the sshPublicKey property.
 * @member {string} [sshPublicKey] The SSH public key that can be used for
 * remote login to the compute node. The public key should be compatible with
 * OpenSSH encoding and should be base 64 encoded. This property can be
 * specified only for Linux nodes. If this is specified for a Windows node,
 * then the Batch service rejects the request; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 */
export interface ComputeNodeUser {
    name: string;
    isAdmin?: boolean;
    expiryTime?: Date;
    password?: string;
    sshPublicKey?: string;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeGetRemoteLoginSettingsResult class.
 * @constructor
 * @summary The remote login settings for a compute node.
 *
 * @member {string} remoteLoginIPAddress The IP address used for remote login
 * to the compute node.
 * @member {number} remoteLoginPort The port used for remote login to the
 * compute node.
 */
export interface ComputeNodeGetRemoteLoginSettingsResult {
    remoteLoginIPAddress: string;
    remoteLoginPort: number;
}
/**
 * @class
 * Initializes a new instance of the JobSchedulePatchParameter class.
 * @constructor
 * @summary The set of changes to be made to a job schedule.
 *
 * @member {object} [schedule] The schedule according to which jobs will be
 * created. If you do not specify this element, the existing schedule is left
 * unchanged.
 * @member {date} [schedule.doNotRunUntil] If you do not specify a
 * doNotRunUntil time, the schedule becomes ready to create jobs immediately.
 * @member {date} [schedule.doNotRunAfter] If you do not specify a
 * doNotRunAfter time, and you are creating a recurring job schedule, the job
 * schedule will remain active until you explicitly terminate it.
 * @member {moment.duration} [schedule.startWindow] If a job is not created
 * within the startWindow interval, then the 'opportunity' is lost; no job will
 * be created until the next recurrence of the schedule. If the schedule is
 * recurring, and the startWindow is longer than the recurrence interval, then
 * this is equivalent to an infinite startWindow, because the job that is 'due'
 * in one recurrenceInterval is not carried forward into the next recurrence
 * interval. The default is infinite. The minimum value is 1 minute. If you
 * specify a lower value, the Batch service rejects the schedule with an error;
 * if you are calling the REST API directly, the HTTP status code is 400 (Bad
 * Request).
 * @member {moment.duration} [schedule.recurrenceInterval] Because a job
 * schedule can have at most one active job under it at any given time, if it
 * is time to create a new job under a job schedule, but the previous job is
 * still running, the Batch service will not create the new job until the
 * previous job finishes. If the previous job does not finish within the
 * startWindow period of the new recurrenceInterval, then no new job will be
 * scheduled for that interval. For recurring jobs, you should normally specify
 * a jobManagerTask in the jobSpecification. If you do not use jobManagerTask,
 * you will need an external process to monitor when jobs are created, add
 * tasks to the jobs and terminate the jobs ready for the next recurrence. The
 * default is that the schedule does not recur: one job is created, within the
 * startWindow after the doNotRunUntil time, and the schedule is complete as
 * soon as that job finishes. The minimum value is 1 minute. If you specify a
 * lower value, the Batch service rejects the schedule with an error; if you
 * are calling the REST API directly, the HTTP status code is 400 (Bad
 * Request).
 * @member {object} [jobSpecification] The details of the jobs to be created on
 * this schedule. Updates affect only jobs that are started after the update
 * has taken place. Any currently active job continues with the older
 * specification.
 * @member {number} [jobSpecification.priority] Priority values can range from
 * -1000 to 1000, with -1000 being the lowest priority and 1000 being the
 * highest priority. The default value is 0. This priority is used as the
 * default for all jobs under the job schedule. You can update a job's priority
 * after it has been created using by using the update job API.
 * @member {string} [jobSpecification.displayName] The name need not be unique
 * and can contain any Unicode characters up to a maximum length of 1024.
 * @member {boolean} [jobSpecification.usesTaskDependencies]
 * @member {string} [jobSpecification.onAllTasksComplete] Note that if a job
 * contains no tasks, then all tasks are considered complete. This option is
 * therefore most commonly used with a Job Manager task; if you want to use
 * automatic job termination without a Job Manager, you should initially set
 * onAllTasksComplete to noAction and update the job properties to set
 * onAllTasksComplete to terminateJob once you have finished adding tasks. The
 * default is noAction. Possible values include: 'noAction', 'terminateJob'
 * @member {string} [jobSpecification.onTaskFailure] The default is noAction.
 * Possible values include: 'noAction', 'performExitOptionsJobAction'
 * @member {object} [jobSpecification.constraints]
 * @member {moment.duration} [jobSpecification.constraints.maxWallClockTime] If
 * the job does not complete within the time limit, the Batch service
 * terminates it and any tasks that are still running. In this case, the
 * termination reason will be MaxWallClockTimeExpiry. If this property is not
 * specified, there is no time limit on how long the job may run.
 * @member {number} [jobSpecification.constraints.maxTaskRetryCount] Note that
 * this value specifically controls the number of retries. The Batch service
 * will try each task once, and may then retry up to this limit. For example,
 * if the maximum retry count is 3, Batch tries a task up to 4 times (one
 * initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry tasks. If the maximum retry count is -1, the Batch
 * service retries tasks without limit. The default value is 0 (no retries).
 * @member {object} [jobSpecification.jobManagerTask] If the job does not
 * specify a Job Manager task, the user must explicitly add tasks to the job
 * using the Task API. If the job does specify a Job Manager task, the Batch
 * service creates the Job Manager task when the job is created, and will try
 * to schedule the Job Manager task before scheduling other tasks in the job.
 * @member {string} [jobSpecification.jobManagerTask.id] The ID can contain any
 * combination of alphanumeric characters including hyphens and underscores and
 * cannot contain more than 64 characters.
 * @member {string} [jobSpecification.jobManagerTask.displayName] It need not
 * be unique and can contain any Unicode characters up to a maximum length of
 * 1024.
 * @member {string} [jobSpecification.jobManagerTask.commandLine] The command
 * line does not run under a shell, and therefore cannot take advantage of
 * shell features such as environment variable expansion. If you want to take
 * advantage of such features, you should invoke the shell in the command line,
 * for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in
 * Linux.
 * @member {array} [jobSpecification.jobManagerTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array} [jobSpecification.jobManagerTask.outputFiles] For
 * multi-instance tasks, the files will only be uploaded from the compute node
 * on which the primary task is executed.
 * @member {array} [jobSpecification.jobManagerTask.environmentSettings]
 * @member {object} [jobSpecification.jobManagerTask.constraints]
 * @member {moment.duration}
 * [jobSpecification.jobManagerTask.constraints.maxWallClockTime] If this is
 * not specified, there is no time limit on how long the task may run.
 * @member {moment.duration}
 * [jobSpecification.jobManagerTask.constraints.retentionTime] The default is
 * infinite, i.e. the task directory will be retained until the compute node is
 * removed or reimaged.
 * @member {number}
 * [jobSpecification.jobManagerTask.constraints.maxTaskRetryCount] Note that
 * this value specifically controls the number of retries. The Batch service
 * will try the task once, and may then retry up to this limit. For example, if
 * the maximum retry count is 3, Batch tries the task up to 4 times (one
 * initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobSpecification.jobManagerTask.killJobOnCompletion] If
 * true, when the Job Manager task completes, the Batch service marks the job
 * as complete. If any tasks are still running at this time (other than Job
 * Release), those tasks are terminated. If false, the completion of the Job
 * Manager task does not affect the job status. In this case, you should either
 * use the onAllTasksComplete attribute to terminate the job, or have a client
 * or user terminate the job explicitly. An example of this is if the Job
 * Manager creates a set of tasks but then takes no further role in their
 * execution. The default value is true. If you are using the
 * onAllTasksComplete and onTaskFailure attributes to control job lifetime, and
 * using the Job Manager task only to create the tasks for the job (not to
 * monitor progress), then it is important to set killJobOnCompletion to false.
 * @member {object} [jobSpecification.jobManagerTask.userIdentity] If omitted,
 * the task runs as a non-administrative user unique to the task.
 * @member {string} [jobSpecification.jobManagerTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object} [jobSpecification.jobManagerTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [jobSpecification.jobManagerTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.jobManagerTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean} [jobSpecification.jobManagerTask.runExclusive] If true, no
 * other tasks will run on the same compute node for as long as the Job Manager
 * is running. If false, other tasks can run simultaneously with the Job
 * Manager on a compute node. The Job Manager task counts normally against the
 * node's concurrent task limit, so this is only relevant if the node allows
 * multiple concurrent tasks. The default value is true.
 * @member {array}
 * [jobSpecification.jobManagerTask.applicationPackageReferences] Application
 * packages are downloaded and deployed to a shared directory, not the task
 * working directory. Therefore, if a referenced package is already on the
 * compute node, and is up to date, then it is not re-downloaded; the existing
 * copy on the compute node is used. If a referenced application package cannot
 * be installed, for example because the package has been deleted or because
 * download failed, the task fails.
 * @member {object}
 * [jobSpecification.jobManagerTask.authenticationTokenSettings] If this
 * property is set, the Batch service provides the task with an authentication
 * token which can be used to authenticate Batch service operations without
 * requiring an account access key. The token is provided via the
 * AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations that the
 * task can carry out using the token depend on the settings. For example, a
 * task can request job permissions in order to add other tasks to the job, or
 * check the status of the job or of other tasks under the job.
 * @member {array}
 * [jobSpecification.jobManagerTask.authenticationTokenSettings.access] The
 * authentication token grants access to a limited set of Batch service
 * operations. Currently the only supported value for the access property is
 * 'job', which grants access to all operations related to the job which
 * contains the task.
 * @member {boolean} [jobSpecification.jobManagerTask.allowLowPriorityNode] The
 * default value is false.
 * @member {object} [jobSpecification.jobPreparationTask] If a job has a Job
 * Preparation task, the Batch service will run the Job Preparation task on a
 * compute node before starting any tasks of that job on that compute node.
 * @member {string} [jobSpecification.jobPreparationTask.id] The ID can contain
 * any combination of alphanumeric characters including hyphens and underscores
 * and cannot contain more than 64 characters. If you do not specify this
 * property, the Batch service assigns a default value of 'jobpreparation'. No
 * other task in the job can have the same ID as the Job Preparation task. If
 * you try to submit a task with the same id, the Batch service rejects the
 * request with error code TaskIdSameAsJobPreparationTask; if you are calling
 * the REST API directly, the HTTP status code is 409 (Conflict).
 * @member {string} [jobSpecification.jobPreparationTask.commandLine] The
 * command line does not run under a shell, and therefore cannot take advantage
 * of shell features such as environment variable expansion. If you want to
 * take advantage of such features, you should invoke the shell in the command
 * line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array} [jobSpecification.jobPreparationTask.resourceFiles] Files
 * listed under this element are located in the task's working directory.
 * @member {array} [jobSpecification.jobPreparationTask.environmentSettings]
 * @member {object} [jobSpecification.jobPreparationTask.constraints]
 * @member {moment.duration}
 * [jobSpecification.jobPreparationTask.constraints.maxWallClockTime] If this
 * is not specified, there is no time limit on how long the task may run.
 * @member {moment.duration}
 * [jobSpecification.jobPreparationTask.constraints.retentionTime] The default
 * is infinite, i.e. the task directory will be retained until the compute node
 * is removed or reimaged.
 * @member {number}
 * [jobSpecification.jobPreparationTask.constraints.maxTaskRetryCount] Note
 * that this value specifically controls the number of retries. The Batch
 * service will try the task once, and may then retry up to this limit. For
 * example, if the maximum retry count is 3, Batch tries the task up to 4 times
 * (one initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobSpecification.jobPreparationTask.waitForSuccess] If
 * true and the Job Preparation task fails on a compute node, the Batch service
 * retries the Job Preparation task up to its maximum retry count (as specified
 * in the constraints element). If the task has still not completed
 * successfully after all retries, then the Batch service will not schedule
 * tasks of the job to the compute node. The compute node remains active and
 * eligible to run tasks of other jobs. If false, the Batch service will not
 * wait for the Job Preparation task to complete. In this case, other tasks of
 * the job can start executing on the compute node while the Job Preparation
 * task is still running; and even if the Job Preparation task fails, new tasks
 * will continue to be scheduled on the node. The default value is true.
 * @member {object} [jobSpecification.jobPreparationTask.userIdentity] If
 * omitted, the task runs as a non-administrative user unique to the task on
 * Windows nodes, or a a non-administrative user unique to the pool on Linux
 * nodes.
 * @member {string} [jobSpecification.jobPreparationTask.userIdentity.userName]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {object} [jobSpecification.jobPreparationTask.userIdentity.autoUser]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {string}
 * [jobSpecification.jobPreparationTask.userIdentity.autoUser.scope] Values
 * are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.jobPreparationTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean}
 * [jobSpecification.jobPreparationTask.rerunOnNodeRebootAfterSuccess] The Job
 * Preparation task is always rerun if a compute node is reimaged, or if the
 * Job Preparation task did not complete (e.g. because the reboot occurred
 * while the task was running). Therefore, you should always write a Job
 * Preparation task to be idempotent and to behave correctly if run multiple
 * times. The default value is true.
 * @member {object} [jobSpecification.jobReleaseTask] The primary purpose of
 * the Job Release task is to undo changes to compute nodes made by the Job
 * Preparation task. Example activities include deleting local files, or
 * shutting down services that were started as part of job preparation. A Job
 * Release task cannot be specified without also specifying a Job Preparation
 * task for the job. The Batch service runs the Job Release task on the compute
 * nodes that have run the Job Preparation task.
 * @member {string} [jobSpecification.jobReleaseTask.id] The ID can contain any
 * combination of alphanumeric characters including hyphens and underscores and
 * cannot contain more than 64 characters. If you do not specify this property,
 * the Batch service assigns a default value of 'jobrelease'. No other task in
 * the job can have the same ID as the Job Release task. If you try to submit a
 * task with the same id, the Batch service rejects the request with error code
 * TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the
 * HTTP status code is 409 (Conflict).
 * @member {string} [jobSpecification.jobReleaseTask.commandLine] The command
 * line does not run under a shell, and therefore cannot take advantage of
 * shell features such as environment variable expansion. If you want to take
 * advantage of such features, you should invoke the shell in the command line,
 * for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in
 * Linux.
 * @member {array} [jobSpecification.jobReleaseTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array} [jobSpecification.jobReleaseTask.environmentSettings]
 * @member {moment.duration} [jobSpecification.jobReleaseTask.maxWallClockTime]
 * @member {moment.duration} [jobSpecification.jobReleaseTask.retentionTime]
 * The default is infinite, i.e. the task directory will be retained until the
 * compute node is removed or reimaged.
 * @member {object} [jobSpecification.jobReleaseTask.userIdentity] If omitted,
 * the task runs as a non-administrative user unique to the task.
 * @member {string} [jobSpecification.jobReleaseTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object} [jobSpecification.jobReleaseTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [jobSpecification.jobReleaseTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.jobReleaseTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {array} [jobSpecification.commonEnvironmentSettings] Individual
 * tasks can override an environment setting specified here by specifying the
 * same setting name with a different value.
 * @member {object} [jobSpecification.poolInfo]
 * @member {string} [jobSpecification.poolInfo.poolId] You must ensure that the
 * pool referenced by this property exists. If the pool does not exist at the
 * time the Batch service tries to schedule a job, no tasks for the job will
 * run until you create a pool with that id. Note that the Batch service will
 * not reject the job request; it will simply not run tasks until the pool
 * exists. You must specify either the pool ID or the auto pool specification,
 * but not both.
 * @member {object} [jobSpecification.poolInfo.autoPoolSpecification] If auto
 * pool creation fails, the Batch service moves the job to a completed state,
 * and the pool creation error is set in the job's scheduling error property.
 * The Batch service manages the lifetime (both creation and, unless keepAlive
 * is specified, deletion) of the auto pool. Any user actions that affect the
 * lifetime of the auto pool while the job is active will result in unexpected
 * behavior. You must specify either the pool ID or the auto pool
 * specification, but not both.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.autoPoolIdPrefix] The Batch
 * service assigns each auto pool a unique identifier on creation. To
 * distinguish between pools created for different purposes, you can specify
 * this element to add a prefix to the ID that is assigned. The prefix can be
 * up to 20 characters long.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.poolLifetimeOption] When
 * the pool lifetime is jobSchedule the pool exists for the lifetime of the job
 * schedule. The Batch Service creates the pool when it creates the first job
 * on the schedule. You may apply this option only to job schedules, not to
 * jobs. When the pool lifetime is job the pool exists for the lifetime of the
 * job to which it is dedicated. The Batch service creates the pool when it
 * creates the job. If the 'job' option is applied to a job schedule, the Batch
 * service creates a new auto pool for every job created on the schedule.
 * Possible values include: 'jobSchedule', 'job'
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.keepAlive] If false, the
 * Batch service deletes the pool once its lifetime (as determined by the
 * poolLifetimeOption setting) expires; that is, when the job or job schedule
 * completes. If true, the Batch service does not delete the pool
 * automatically. It is up to the user to delete auto pools created with this
 * option.
 * @member {object} [jobSpecification.poolInfo.autoPoolSpecification.pool]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.displayName] The
 * display name need not be unique and can contain any Unicode characters up to
 * a maximum length of 1024.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.vmSize] For
 * information about available sizes of virtual machines for Cloud Services
 * pools (pools created with cloudServiceConfiguration), see Sizes for Cloud
 * Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
 * This property must be specified if the pool needs to be created with Azure
 * PaaS VMs. This property and virtualMachineConfiguration are mutually
 * exclusive and one of the properties must be specified. If neither is
 * specified then the Batch service returns an error; if you are calling the
 * REST API directly, the HTTP status code is 400 (Bad Request). This property
 * cannot be specified if the Batch account was created with its
 * poolAllocationMode property set to 'UserSubscription'.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily]
 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2
 * SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4,
 * equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows
 * Server 2016. For more information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
 * The default value is * which specifies the latest operating system version
 * for the specified OS family.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
 * This may differ from targetOSVersion if the pool state is Upgrading. In this
 * case some virtual machines may be on the targetOSVersion and some may be on
 * the currentOSVersion during the upgrade process. Once all virtual machines
 * have upgraded, currentOSVersion is updated to be the same as
 * targetOSVersion.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
 * This property must be specified if the pool needs to be created with Azure
 * IaaS VMs. This property and cloudServiceConfiguration are mutually exclusive
 * and one of the properties must be specified. If neither is specified then
 * the Batch service returns an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
 * This property and osDisk are mutually exclusive and one of the properties
 * must be specified.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
 * For example, Canonical or MicrosoftWindowsServer.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
 * For example, UbuntuServer or WindowsServer.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
 * For example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
 * A value of 'latest' can be specified to select the latest version of an
 * image. If omitted, the default is 'latest'.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
 * This property can be specified only if the Batch account was created with
 * its poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris]
 * All the VHDs must be identical and must reside in an Azure Storage account
 * within the same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
 * Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId]
 * The Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems. You must specify a node agent SKU
 * which matches the selected image reference. To get the list of supported
 * node agent SKUs along with their list of verified image references, see the
 * 'List supported node agent SKUs' operation.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
 * This property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * If omitted, the default value is true.
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
 * default value is 1. The maximum value of this setting depends on the size of
 * the compute nodes in the pool (the vmSize setting).
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType]
 * Possible values include: 'spread', 'pack'
 * @member {moment.duration}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.resizeTimeout] This
 * timeout applies only to manual scaling; it has no effect when
 * enableAutoScale is set to true. The default value is 15 minutes. The minimum
 * value is 5 minutes. If you specify a value less than 5 minutes, the Batch
 * service rejects the request with an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.enableAutoScale] If
 * false, at least one of targetDedicateNodes and targetLowPriorityNodes must
 * be specified. If true, the autoScaleFormula element is required. The pool
 * automatically resizes according to the formula. The default value is false.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleFormula] This
 * property must not be specified if enableAutoScale is set to false. It is
 * required if enableAutoScale is set to true. The formula is checked for
 * validity before the pool is created. If the formula is not valid, the Batch
 * service rejects the request with detailed error information.
 * @member {moment.duration}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
 * The default value is 15 minutes. The minimum and maximum value are 5 minutes
 * and 168 hours respectively. If you specify a value less than 5 minutes or
 * greater than 168 hours, the Batch service rejects the request with an
 * invalid property value error; if you are calling the REST API directly, the
 * HTTP status code is 400 (Bad Request).
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
 * Enabling inter-node communication limits the maximum size of the pool due to
 * deployment restrictions on the nodes of the pool. This may result in the
 * pool not reaching its desired size. The default value is false.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
 * The virtual network must be in the same region and subscription as the Azure
 * Batch account. The specified subnet should have enough free IP addresses to
 * accommodate the number of nodes in the pool. If the subnet doesn't have
 * enough free IP addresses, the pool will partially allocate compute nodes,
 * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
 * must have the 'Classic Virtual Machine Contributor' Role-Based Access
 * Control (RBAC) role for the specified VNet. The specified subnet must allow
 * communication from the Azure Batch service to be able to schedule tasks on
 * the compute nodes. This can be verified by checking if the specified VNet
 * has any associated Network Security Groups (NSG). If communication to the
 * compute nodes in the specified subnet is denied by an NSG, then the Batch
 * service will set the state of the compute nodes to unusable. For pools
 * created via virtualMachineConfiguration the Batch account must have
 * poolAllocationMode userSubscription in order to use a VNet. If the specified
 * VNet has any associated Network Security Groups (NSG), then a few reserved
 * system ports must be enabled for inbound communication. For pools created
 * with a virtual machine configuration, enable ports 29876 and 29877, as well
 * as port 22 for Linux and port 3389 for Windows. For pools created with a
 * cloud service configuration, enable ports 10100, 20100, and 30100. Also
 * enable outbound connections to Azure Storage on port 443. For more details
 * see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
 * Pool endpoint configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.commandLine]
 * The command line does not run under a shell, and therefore cannot take
 * advantage of shell features such as environment variable expansion. If you
 * want to take advantage of such features, you should invoke the shell in the
 * command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
 * Files listed under this element are located in the task's working directory.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
 * If omitted, the task runs as a non-administrative user unique to the task.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
 * Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
 * The Batch service retries a task if its exit code is nonzero. Note that this
 * value specifically controls the number of retries. The Batch service will
 * try the task once, and may then retry up to this limit. For example, if the
 * maximum retry count is 3, Batch tries the task up to 4 times (one initial
 * try and 3 retries). If the maximum retry count is 0, the Batch service does
 * not retry the task. If the maximum retry count is -1, the Batch service
 * retries the task without limit.
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
 * If true and the start task fails on a compute node, the Batch service
 * retries the start task up to its maximum retry count (maxTaskRetryCount). If
 * the task has still not completed successfully after all retries, then the
 * Batch service marks the compute node unusable, and will not schedule tasks
 * to it. This condition can be detected via the node state and failure info
 * details. If false, the Batch service will not wait for the start task to
 * complete. In this case, other tasks can start executing on the compute node
 * while the start task is still running; and even if the start task fails, new
 * tasks will continue to be scheduled on the node. The default is false.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.certificateReferences]
 * For Windows compute nodes, the Batch service installs the certificates to
 * the specified certificate store and location. For Linux compute nodes, the
 * certificates are stored in a directory inside the task working directory and
 * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
 * query for this location. For certificates with visibility of 'remoteUser', a
 * 'certs' directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.applicationLicenses]
 * The list of application licenses must be a subset of available Batch service
 * application licenses. If a license is requested which is not supported, pool
 * creation will fail.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.userAccounts]
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.metadata] The Batch
 * service does not assign any meaning to metadata; it is solely for the use of
 * user code.
 * @member {array} [jobSpecification.metadata] The Batch service does not
 * assign any meaning to metadata; it is solely for the use of user code.
 * @member {array} [metadata] A list of name-value pairs associated with the
 * job schedule as metadata. If you do not specify this element, existing
 * metadata is left unchanged.
 */
export interface JobSchedulePatchParameter {
    schedule?: Schedule;
    jobSpecification?: JobSpecification;
    metadata?: MetadataItem[];
}
/**
 * @class
 * Initializes a new instance of the JobScheduleUpdateParameter class.
 * @constructor
 * @summary The set of changes to be made to a job schedule.
 *
 * @member {object} schedule The schedule according to which jobs will be
 * created. If you do not specify this element, it is equivalent to passing the
 * default schedule: that is, a single job scheduled to run immediately.
 * @member {date} [schedule.doNotRunUntil] If you do not specify a
 * doNotRunUntil time, the schedule becomes ready to create jobs immediately.
 * @member {date} [schedule.doNotRunAfter] If you do not specify a
 * doNotRunAfter time, and you are creating a recurring job schedule, the job
 * schedule will remain active until you explicitly terminate it.
 * @member {moment.duration} [schedule.startWindow] If a job is not created
 * within the startWindow interval, then the 'opportunity' is lost; no job will
 * be created until the next recurrence of the schedule. If the schedule is
 * recurring, and the startWindow is longer than the recurrence interval, then
 * this is equivalent to an infinite startWindow, because the job that is 'due'
 * in one recurrenceInterval is not carried forward into the next recurrence
 * interval. The default is infinite. The minimum value is 1 minute. If you
 * specify a lower value, the Batch service rejects the schedule with an error;
 * if you are calling the REST API directly, the HTTP status code is 400 (Bad
 * Request).
 * @member {moment.duration} [schedule.recurrenceInterval] Because a job
 * schedule can have at most one active job under it at any given time, if it
 * is time to create a new job under a job schedule, but the previous job is
 * still running, the Batch service will not create the new job until the
 * previous job finishes. If the previous job does not finish within the
 * startWindow period of the new recurrenceInterval, then no new job will be
 * scheduled for that interval. For recurring jobs, you should normally specify
 * a jobManagerTask in the jobSpecification. If you do not use jobManagerTask,
 * you will need an external process to monitor when jobs are created, add
 * tasks to the jobs and terminate the jobs ready for the next recurrence. The
 * default is that the schedule does not recur: one job is created, within the
 * startWindow after the doNotRunUntil time, and the schedule is complete as
 * soon as that job finishes. The minimum value is 1 minute. If you specify a
 * lower value, the Batch service rejects the schedule with an error; if you
 * are calling the REST API directly, the HTTP status code is 400 (Bad
 * Request).
 * @member {object} jobSpecification Details of the jobs to be created on this
 * schedule. Updates affect only jobs that are started after the update has
 * taken place. Any currently active job continues with the older
 * specification.
 * @member {number} [jobSpecification.priority] Priority values can range from
 * -1000 to 1000, with -1000 being the lowest priority and 1000 being the
 * highest priority. The default value is 0. This priority is used as the
 * default for all jobs under the job schedule. You can update a job's priority
 * after it has been created using by using the update job API.
 * @member {string} [jobSpecification.displayName] The name need not be unique
 * and can contain any Unicode characters up to a maximum length of 1024.
 * @member {boolean} [jobSpecification.usesTaskDependencies]
 * @member {string} [jobSpecification.onAllTasksComplete] Note that if a job
 * contains no tasks, then all tasks are considered complete. This option is
 * therefore most commonly used with a Job Manager task; if you want to use
 * automatic job termination without a Job Manager, you should initially set
 * onAllTasksComplete to noAction and update the job properties to set
 * onAllTasksComplete to terminateJob once you have finished adding tasks. The
 * default is noAction. Possible values include: 'noAction', 'terminateJob'
 * @member {string} [jobSpecification.onTaskFailure] The default is noAction.
 * Possible values include: 'noAction', 'performExitOptionsJobAction'
 * @member {object} [jobSpecification.constraints]
 * @member {moment.duration} [jobSpecification.constraints.maxWallClockTime] If
 * the job does not complete within the time limit, the Batch service
 * terminates it and any tasks that are still running. In this case, the
 * termination reason will be MaxWallClockTimeExpiry. If this property is not
 * specified, there is no time limit on how long the job may run.
 * @member {number} [jobSpecification.constraints.maxTaskRetryCount] Note that
 * this value specifically controls the number of retries. The Batch service
 * will try each task once, and may then retry up to this limit. For example,
 * if the maximum retry count is 3, Batch tries a task up to 4 times (one
 * initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry tasks. If the maximum retry count is -1, the Batch
 * service retries tasks without limit. The default value is 0 (no retries).
 * @member {object} [jobSpecification.jobManagerTask] If the job does not
 * specify a Job Manager task, the user must explicitly add tasks to the job
 * using the Task API. If the job does specify a Job Manager task, the Batch
 * service creates the Job Manager task when the job is created, and will try
 * to schedule the Job Manager task before scheduling other tasks in the job.
 * @member {string} [jobSpecification.jobManagerTask.id] The ID can contain any
 * combination of alphanumeric characters including hyphens and underscores and
 * cannot contain more than 64 characters.
 * @member {string} [jobSpecification.jobManagerTask.displayName] It need not
 * be unique and can contain any Unicode characters up to a maximum length of
 * 1024.
 * @member {string} [jobSpecification.jobManagerTask.commandLine] The command
 * line does not run under a shell, and therefore cannot take advantage of
 * shell features such as environment variable expansion. If you want to take
 * advantage of such features, you should invoke the shell in the command line,
 * for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in
 * Linux.
 * @member {array} [jobSpecification.jobManagerTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array} [jobSpecification.jobManagerTask.outputFiles] For
 * multi-instance tasks, the files will only be uploaded from the compute node
 * on which the primary task is executed.
 * @member {array} [jobSpecification.jobManagerTask.environmentSettings]
 * @member {object} [jobSpecification.jobManagerTask.constraints]
 * @member {moment.duration}
 * [jobSpecification.jobManagerTask.constraints.maxWallClockTime] If this is
 * not specified, there is no time limit on how long the task may run.
 * @member {moment.duration}
 * [jobSpecification.jobManagerTask.constraints.retentionTime] The default is
 * infinite, i.e. the task directory will be retained until the compute node is
 * removed or reimaged.
 * @member {number}
 * [jobSpecification.jobManagerTask.constraints.maxTaskRetryCount] Note that
 * this value specifically controls the number of retries. The Batch service
 * will try the task once, and may then retry up to this limit. For example, if
 * the maximum retry count is 3, Batch tries the task up to 4 times (one
 * initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobSpecification.jobManagerTask.killJobOnCompletion] If
 * true, when the Job Manager task completes, the Batch service marks the job
 * as complete. If any tasks are still running at this time (other than Job
 * Release), those tasks are terminated. If false, the completion of the Job
 * Manager task does not affect the job status. In this case, you should either
 * use the onAllTasksComplete attribute to terminate the job, or have a client
 * or user terminate the job explicitly. An example of this is if the Job
 * Manager creates a set of tasks but then takes no further role in their
 * execution. The default value is true. If you are using the
 * onAllTasksComplete and onTaskFailure attributes to control job lifetime, and
 * using the Job Manager task only to create the tasks for the job (not to
 * monitor progress), then it is important to set killJobOnCompletion to false.
 * @member {object} [jobSpecification.jobManagerTask.userIdentity] If omitted,
 * the task runs as a non-administrative user unique to the task.
 * @member {string} [jobSpecification.jobManagerTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object} [jobSpecification.jobManagerTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [jobSpecification.jobManagerTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.jobManagerTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean} [jobSpecification.jobManagerTask.runExclusive] If true, no
 * other tasks will run on the same compute node for as long as the Job Manager
 * is running. If false, other tasks can run simultaneously with the Job
 * Manager on a compute node. The Job Manager task counts normally against the
 * node's concurrent task limit, so this is only relevant if the node allows
 * multiple concurrent tasks. The default value is true.
 * @member {array}
 * [jobSpecification.jobManagerTask.applicationPackageReferences] Application
 * packages are downloaded and deployed to a shared directory, not the task
 * working directory. Therefore, if a referenced package is already on the
 * compute node, and is up to date, then it is not re-downloaded; the existing
 * copy on the compute node is used. If a referenced application package cannot
 * be installed, for example because the package has been deleted or because
 * download failed, the task fails.
 * @member {object}
 * [jobSpecification.jobManagerTask.authenticationTokenSettings] If this
 * property is set, the Batch service provides the task with an authentication
 * token which can be used to authenticate Batch service operations without
 * requiring an account access key. The token is provided via the
 * AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations that the
 * task can carry out using the token depend on the settings. For example, a
 * task can request job permissions in order to add other tasks to the job, or
 * check the status of the job or of other tasks under the job.
 * @member {array}
 * [jobSpecification.jobManagerTask.authenticationTokenSettings.access] The
 * authentication token grants access to a limited set of Batch service
 * operations. Currently the only supported value for the access property is
 * 'job', which grants access to all operations related to the job which
 * contains the task.
 * @member {boolean} [jobSpecification.jobManagerTask.allowLowPriorityNode] The
 * default value is false.
 * @member {object} [jobSpecification.jobPreparationTask] If a job has a Job
 * Preparation task, the Batch service will run the Job Preparation task on a
 * compute node before starting any tasks of that job on that compute node.
 * @member {string} [jobSpecification.jobPreparationTask.id] The ID can contain
 * any combination of alphanumeric characters including hyphens and underscores
 * and cannot contain more than 64 characters. If you do not specify this
 * property, the Batch service assigns a default value of 'jobpreparation'. No
 * other task in the job can have the same ID as the Job Preparation task. If
 * you try to submit a task with the same id, the Batch service rejects the
 * request with error code TaskIdSameAsJobPreparationTask; if you are calling
 * the REST API directly, the HTTP status code is 409 (Conflict).
 * @member {string} [jobSpecification.jobPreparationTask.commandLine] The
 * command line does not run under a shell, and therefore cannot take advantage
 * of shell features such as environment variable expansion. If you want to
 * take advantage of such features, you should invoke the shell in the command
 * line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array} [jobSpecification.jobPreparationTask.resourceFiles] Files
 * listed under this element are located in the task's working directory.
 * @member {array} [jobSpecification.jobPreparationTask.environmentSettings]
 * @member {object} [jobSpecification.jobPreparationTask.constraints]
 * @member {moment.duration}
 * [jobSpecification.jobPreparationTask.constraints.maxWallClockTime] If this
 * is not specified, there is no time limit on how long the task may run.
 * @member {moment.duration}
 * [jobSpecification.jobPreparationTask.constraints.retentionTime] The default
 * is infinite, i.e. the task directory will be retained until the compute node
 * is removed or reimaged.
 * @member {number}
 * [jobSpecification.jobPreparationTask.constraints.maxTaskRetryCount] Note
 * that this value specifically controls the number of retries. The Batch
 * service will try the task once, and may then retry up to this limit. For
 * example, if the maximum retry count is 3, Batch tries the task up to 4 times
 * (one initial try and 3 retries). If the maximum retry count is 0, the Batch
 * service does not retry the task. If the maximum retry count is -1, the Batch
 * service retries the task without limit.
 * @member {boolean} [jobSpecification.jobPreparationTask.waitForSuccess] If
 * true and the Job Preparation task fails on a compute node, the Batch service
 * retries the Job Preparation task up to its maximum retry count (as specified
 * in the constraints element). If the task has still not completed
 * successfully after all retries, then the Batch service will not schedule
 * tasks of the job to the compute node. The compute node remains active and
 * eligible to run tasks of other jobs. If false, the Batch service will not
 * wait for the Job Preparation task to complete. In this case, other tasks of
 * the job can start executing on the compute node while the Job Preparation
 * task is still running; and even if the Job Preparation task fails, new tasks
 * will continue to be scheduled on the node. The default value is true.
 * @member {object} [jobSpecification.jobPreparationTask.userIdentity] If
 * omitted, the task runs as a non-administrative user unique to the task on
 * Windows nodes, or a a non-administrative user unique to the pool on Linux
 * nodes.
 * @member {string} [jobSpecification.jobPreparationTask.userIdentity.userName]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {object} [jobSpecification.jobPreparationTask.userIdentity.autoUser]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {string}
 * [jobSpecification.jobPreparationTask.userIdentity.autoUser.scope] Values
 * are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.jobPreparationTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {boolean}
 * [jobSpecification.jobPreparationTask.rerunOnNodeRebootAfterSuccess] The Job
 * Preparation task is always rerun if a compute node is reimaged, or if the
 * Job Preparation task did not complete (e.g. because the reboot occurred
 * while the task was running). Therefore, you should always write a Job
 * Preparation task to be idempotent and to behave correctly if run multiple
 * times. The default value is true.
 * @member {object} [jobSpecification.jobReleaseTask] The primary purpose of
 * the Job Release task is to undo changes to compute nodes made by the Job
 * Preparation task. Example activities include deleting local files, or
 * shutting down services that were started as part of job preparation. A Job
 * Release task cannot be specified without also specifying a Job Preparation
 * task for the job. The Batch service runs the Job Release task on the compute
 * nodes that have run the Job Preparation task.
 * @member {string} [jobSpecification.jobReleaseTask.id] The ID can contain any
 * combination of alphanumeric characters including hyphens and underscores and
 * cannot contain more than 64 characters. If you do not specify this property,
 * the Batch service assigns a default value of 'jobrelease'. No other task in
 * the job can have the same ID as the Job Release task. If you try to submit a
 * task with the same id, the Batch service rejects the request with error code
 * TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the
 * HTTP status code is 409 (Conflict).
 * @member {string} [jobSpecification.jobReleaseTask.commandLine] The command
 * line does not run under a shell, and therefore cannot take advantage of
 * shell features such as environment variable expansion. If you want to take
 * advantage of such features, you should invoke the shell in the command line,
 * for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in
 * Linux.
 * @member {array} [jobSpecification.jobReleaseTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array} [jobSpecification.jobReleaseTask.environmentSettings]
 * @member {moment.duration} [jobSpecification.jobReleaseTask.maxWallClockTime]
 * @member {moment.duration} [jobSpecification.jobReleaseTask.retentionTime]
 * The default is infinite, i.e. the task directory will be retained until the
 * compute node is removed or reimaged.
 * @member {object} [jobSpecification.jobReleaseTask.userIdentity] If omitted,
 * the task runs as a non-administrative user unique to the task.
 * @member {string} [jobSpecification.jobReleaseTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object} [jobSpecification.jobReleaseTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [jobSpecification.jobReleaseTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.jobReleaseTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {array} [jobSpecification.commonEnvironmentSettings] Individual
 * tasks can override an environment setting specified here by specifying the
 * same setting name with a different value.
 * @member {object} [jobSpecification.poolInfo]
 * @member {string} [jobSpecification.poolInfo.poolId] You must ensure that the
 * pool referenced by this property exists. If the pool does not exist at the
 * time the Batch service tries to schedule a job, no tasks for the job will
 * run until you create a pool with that id. Note that the Batch service will
 * not reject the job request; it will simply not run tasks until the pool
 * exists. You must specify either the pool ID or the auto pool specification,
 * but not both.
 * @member {object} [jobSpecification.poolInfo.autoPoolSpecification] If auto
 * pool creation fails, the Batch service moves the job to a completed state,
 * and the pool creation error is set in the job's scheduling error property.
 * The Batch service manages the lifetime (both creation and, unless keepAlive
 * is specified, deletion) of the auto pool. Any user actions that affect the
 * lifetime of the auto pool while the job is active will result in unexpected
 * behavior. You must specify either the pool ID or the auto pool
 * specification, but not both.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.autoPoolIdPrefix] The Batch
 * service assigns each auto pool a unique identifier on creation. To
 * distinguish between pools created for different purposes, you can specify
 * this element to add a prefix to the ID that is assigned. The prefix can be
 * up to 20 characters long.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.poolLifetimeOption] When
 * the pool lifetime is jobSchedule the pool exists for the lifetime of the job
 * schedule. The Batch Service creates the pool when it creates the first job
 * on the schedule. You may apply this option only to job schedules, not to
 * jobs. When the pool lifetime is job the pool exists for the lifetime of the
 * job to which it is dedicated. The Batch service creates the pool when it
 * creates the job. If the 'job' option is applied to a job schedule, the Batch
 * service creates a new auto pool for every job created on the schedule.
 * Possible values include: 'jobSchedule', 'job'
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.keepAlive] If false, the
 * Batch service deletes the pool once its lifetime (as determined by the
 * poolLifetimeOption setting) expires; that is, when the job or job schedule
 * completes. If true, the Batch service does not delete the pool
 * automatically. It is up to the user to delete auto pools created with this
 * option.
 * @member {object} [jobSpecification.poolInfo.autoPoolSpecification.pool]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.displayName] The
 * display name need not be unique and can contain any Unicode characters up to
 * a maximum length of 1024.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.vmSize] For
 * information about available sizes of virtual machines for Cloud Services
 * pools (pools created with cloudServiceConfiguration), see Sizes for Cloud
 * Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
 * This property must be specified if the pool needs to be created with Azure
 * PaaS VMs. This property and virtualMachineConfiguration are mutually
 * exclusive and one of the properties must be specified. If neither is
 * specified then the Batch service returns an error; if you are calling the
 * REST API directly, the HTTP status code is 400 (Bad Request). This property
 * cannot be specified if the Batch account was created with its
 * poolAllocationMode property set to 'UserSubscription'.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily]
 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2
 * SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4,
 * equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows
 * Server 2016. For more information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
 * The default value is * which specifies the latest operating system version
 * for the specified OS family.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
 * This may differ from targetOSVersion if the pool state is Upgrading. In this
 * case some virtual machines may be on the targetOSVersion and some may be on
 * the currentOSVersion during the upgrade process. Once all virtual machines
 * have upgraded, currentOSVersion is updated to be the same as
 * targetOSVersion.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
 * This property must be specified if the pool needs to be created with Azure
 * IaaS VMs. This property and cloudServiceConfiguration are mutually exclusive
 * and one of the properties must be specified. If neither is specified then
 * the Batch service returns an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
 * This property and osDisk are mutually exclusive and one of the properties
 * must be specified.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
 * For example, Canonical or MicrosoftWindowsServer.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
 * For example, UbuntuServer or WindowsServer.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
 * For example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
 * A value of 'latest' can be specified to select the latest version of an
 * image. If omitted, the default is 'latest'.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
 * This property can be specified only if the Batch account was created with
 * its poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris]
 * All the VHDs must be identical and must reside in an Azure Storage account
 * within the same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
 * Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId]
 * The Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems. You must specify a node agent SKU
 * which matches the selected image reference. To get the list of supported
 * node agent SKUs along with their list of verified image references, see the
 * 'List supported node agent SKUs' operation.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
 * This property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * If omitted, the default value is true.
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
 * default value is 1. The maximum value of this setting depends on the size of
 * the compute nodes in the pool (the vmSize setting).
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType]
 * Possible values include: 'spread', 'pack'
 * @member {moment.duration}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.resizeTimeout] This
 * timeout applies only to manual scaling; it has no effect when
 * enableAutoScale is set to true. The default value is 15 minutes. The minimum
 * value is 5 minutes. If you specify a value less than 5 minutes, the Batch
 * service rejects the request with an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request).
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.enableAutoScale] If
 * false, at least one of targetDedicateNodes and targetLowPriorityNodes must
 * be specified. If true, the autoScaleFormula element is required. The pool
 * automatically resizes according to the formula. The default value is false.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleFormula] This
 * property must not be specified if enableAutoScale is set to false. It is
 * required if enableAutoScale is set to true. The formula is checked for
 * validity before the pool is created. If the formula is not valid, the Batch
 * service rejects the request with detailed error information.
 * @member {moment.duration}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
 * The default value is 15 minutes. The minimum and maximum value are 5 minutes
 * and 168 hours respectively. If you specify a value less than 5 minutes or
 * greater than 168 hours, the Batch service rejects the request with an
 * invalid property value error; if you are calling the REST API directly, the
 * HTTP status code is 400 (Bad Request).
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
 * Enabling inter-node communication limits the maximum size of the pool due to
 * deployment restrictions on the nodes of the pool. This may result in the
 * pool not reaching its desired size. The default value is false.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
 * The virtual network must be in the same region and subscription as the Azure
 * Batch account. The specified subnet should have enough free IP addresses to
 * accommodate the number of nodes in the pool. If the subnet doesn't have
 * enough free IP addresses, the pool will partially allocate compute nodes,
 * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
 * must have the 'Classic Virtual Machine Contributor' Role-Based Access
 * Control (RBAC) role for the specified VNet. The specified subnet must allow
 * communication from the Azure Batch service to be able to schedule tasks on
 * the compute nodes. This can be verified by checking if the specified VNet
 * has any associated Network Security Groups (NSG). If communication to the
 * compute nodes in the specified subnet is denied by an NSG, then the Batch
 * service will set the state of the compute nodes to unusable. For pools
 * created via virtualMachineConfiguration the Batch account must have
 * poolAllocationMode userSubscription in order to use a VNet. If the specified
 * VNet has any associated Network Security Groups (NSG), then a few reserved
 * system ports must be enabled for inbound communication. For pools created
 * with a virtual machine configuration, enable ports 29876 and 29877, as well
 * as port 22 for Linux and port 3389 for Windows. For pools created with a
 * cloud service configuration, enable ports 10100, 20100, and 30100. Also
 * enable outbound connections to Azure Storage on port 443. For more details
 * see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
 * Pool endpoint configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask]
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.commandLine]
 * The command line does not run under a shell, and therefore cannot take
 * advantage of shell features such as environment variable expansion. If you
 * want to take advantage of such features, you should invoke the shell in the
 * command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
 * Files listed under this element are located in the task's working directory.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
 * If omitted, the task runs as a non-administrative user unique to the task.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
 * The userName and autoUser properties are mutually exclusive; you must
 * specify one but not both.
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
 * Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
 * The Batch service retries a task if its exit code is nonzero. Note that this
 * value specifically controls the number of retries. The Batch service will
 * try the task once, and may then retry up to this limit. For example, if the
 * maximum retry count is 3, Batch tries the task up to 4 times (one initial
 * try and 3 retries). If the maximum retry count is 0, the Batch service does
 * not retry the task. If the maximum retry count is -1, the Batch service
 * retries the task without limit.
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
 * If true and the start task fails on a compute node, the Batch service
 * retries the start task up to its maximum retry count (maxTaskRetryCount). If
 * the task has still not completed successfully after all retries, then the
 * Batch service marks the compute node unusable, and will not schedule tasks
 * to it. This condition can be detected via the node state and failure info
 * details. If false, the Batch service will not wait for the start task to
 * complete. In this case, other tasks can start executing on the compute node
 * while the start task is still running; and even if the start task fails, new
 * tasks will continue to be scheduled on the node. The default is false.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.certificateReferences]
 * For Windows compute nodes, the Batch service installs the certificates to
 * the specified certificate store and location. For Linux compute nodes, the
 * certificates are stored in a directory inside the task working directory and
 * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
 * query for this location. For certificates with visibility of 'remoteUser', a
 * 'certs' directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.applicationLicenses]
 * The list of application licenses must be a subset of available Batch service
 * application licenses. If a license is requested which is not supported, pool
 * creation will fail.
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.userAccounts]
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.metadata] The Batch
 * service does not assign any meaning to metadata; it is solely for the use of
 * user code.
 * @member {array} [jobSpecification.metadata] The Batch service does not
 * assign any meaning to metadata; it is solely for the use of user code.
 * @member {array} [metadata] A list of name-value pairs associated with the
 * job schedule as metadata. If you do not specify this element, it takes the
 * default value of an empty list; in effect, any existing metadata is deleted.
 */
export interface JobScheduleUpdateParameter {
    schedule: Schedule;
    jobSpecification: JobSpecification;
    metadata?: MetadataItem[];
}
/**
 * @class
 * Initializes a new instance of the JobDisableParameter class.
 * @constructor
 * @summary Options when disabling a job.
 *
 * @member {string} disableTasks What to do with active tasks associated with
 * the job. Values are:
 *
 * requeue - Terminate running tasks and requeue them. The tasks will run again
 * when the job is enabled.
 * terminate - Terminate running tasks. The tasks will not run again.
 * wait - Allow currently running tasks to complete. Possible values include:
 * 'requeue', 'terminate', 'wait'
 */
export interface JobDisableParameter {
    disableTasks: string;
}
/**
 * @class
 * Initializes a new instance of the JobTerminateParameter class.
 * @constructor
 * @summary Options when terminating a job.
 *
 * @member {string} [terminateReason] The text you want to appear as the job's
 * TerminateReason. The default is 'UserTerminate'.
 */
export interface JobTerminateParameter {
    terminateReason?: string;
}
/**
 * @class
 * Initializes a new instance of the JobPatchParameter class.
 * @constructor
 * @summary The set of changes to be made to a job.
 *
 * @member {number} [priority] The priority of the job. Priority values can
 * range from -1000 to 1000, with -1000 being the lowest priority and 1000
 * being the highest priority. If omitted, the priority of the job is left
 * unchanged.
 * @member {string} [onAllTasksComplete] The action the Batch service should
 * take when all tasks in the job are in the completed state. If omitted, the
 * completion behavior is left unchanged. You may not change the value from
 * terminateJob to noAction - that is, once you have engaged automatic job
 * termination, you cannot turn it off again. If you try to do this, the
 * request fails with an 'invalid property value' error response; if you are
 * calling the REST API directly, the HTTP status code is 400 (Bad Request).
 * Possible values include: 'noAction', 'terminateJob'
 * @member {object} [constraints] The execution constraints for the job. If
 * omitted, the existing execution constraints are left unchanged.
 * @member {moment.duration} [constraints.maxWallClockTime] If the job does not
 * complete within the time limit, the Batch service terminates it and any
 * tasks that are still running. In this case, the termination reason will be
 * MaxWallClockTimeExpiry. If this property is not specified, there is no time
 * limit on how long the job may run.
 * @member {number} [constraints.maxTaskRetryCount] Note that this value
 * specifically controls the number of retries. The Batch service will try each
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries a task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * tasks. If the maximum retry count is -1, the Batch service retries tasks
 * without limit. The default value is 0 (no retries).
 * @member {object} [poolInfo] The pool on which the Batch service runs the
 * job's tasks. You may change the pool for a job only when the job is
 * disabled. The Patch Job call will fail if you include the poolInfo element
 * and the job is not disabled. If you specify an autoPoolSpecification
 * specification in the poolInfo, only the keepAlive property can be updated,
 * and then only if the auto pool has a poolLifetimeOption of job. If omitted,
 * the job continues to run on its current pool.
 * @member {string} [poolInfo.poolId] You must ensure that the pool referenced
 * by this property exists. If the pool does not exist at the time the Batch
 * service tries to schedule a job, no tasks for the job will run until you
 * create a pool with that id. Note that the Batch service will not reject the
 * job request; it will simply not run tasks until the pool exists. You must
 * specify either the pool ID or the auto pool specification, but not both.
 * @member {object} [poolInfo.autoPoolSpecification] If auto pool creation
 * fails, the Batch service moves the job to a completed state, and the pool
 * creation error is set in the job's scheduling error property. The Batch
 * service manages the lifetime (both creation and, unless keepAlive is
 * specified, deletion) of the auto pool. Any user actions that affect the
 * lifetime of the auto pool while the job is active will result in unexpected
 * behavior. You must specify either the pool ID or the auto pool
 * specification, but not both.
 * @member {string} [poolInfo.autoPoolSpecification.autoPoolIdPrefix] The Batch
 * service assigns each auto pool a unique identifier on creation. To
 * distinguish between pools created for different purposes, you can specify
 * this element to add a prefix to the ID that is assigned. The prefix can be
 * up to 20 characters long.
 * @member {string} [poolInfo.autoPoolSpecification.poolLifetimeOption] When
 * the pool lifetime is jobSchedule the pool exists for the lifetime of the job
 * schedule. The Batch Service creates the pool when it creates the first job
 * on the schedule. You may apply this option only to job schedules, not to
 * jobs. When the pool lifetime is job the pool exists for the lifetime of the
 * job to which it is dedicated. The Batch service creates the pool when it
 * creates the job. If the 'job' option is applied to a job schedule, the Batch
 * service creates a new auto pool for every job created on the schedule.
 * Possible values include: 'jobSchedule', 'job'
 * @member {boolean} [poolInfo.autoPoolSpecification.keepAlive] If false, the
 * Batch service deletes the pool once its lifetime (as determined by the
 * poolLifetimeOption setting) expires; that is, when the job or job schedule
 * completes. If true, the Batch service does not delete the pool
 * automatically. It is up to the user to delete auto pools created with this
 * option.
 * @member {object} [poolInfo.autoPoolSpecification.pool]
 * @member {string} [poolInfo.autoPoolSpecification.pool.displayName] The
 * display name need not be unique and can contain any Unicode characters up to
 * a maximum length of 1024.
 * @member {string} [poolInfo.autoPoolSpecification.pool.vmSize] For
 * information about available sizes of virtual machines for Cloud Services
 * pools (pools created with cloudServiceConfiguration), see Sizes for Cloud
 * Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration] This
 * property must be specified if the pool needs to be created with Azure PaaS
 * VMs. This property and virtualMachineConfiguration are mutually exclusive
 * and one of the properties must be specified. If neither is specified then
 * the Batch service returns an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request). This property cannot be
 * specified if the Batch account was created with its poolAllocationMode
 * property set to 'UserSubscription'.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily]
 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2
 * SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4,
 * equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows
 * Server 2016. For more information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
 * The default value is * which specifies the latest operating system version
 * for the specified OS family.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
 * This may differ from targetOSVersion if the pool state is Upgrading. In this
 * case some virtual machines may be on the targetOSVersion and some may be on
 * the currentOSVersion during the upgrade process. Once all virtual machines
 * have upgraded, currentOSVersion is updated to be the same as
 * targetOSVersion.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration] This
 * property must be specified if the pool needs to be created with Azure IaaS
 * VMs. This property and cloudServiceConfiguration are mutually exclusive and
 * one of the properties must be specified. If neither is specified then the
 * Batch service returns an error; if you are calling the REST API directly,
 * the HTTP status code is 400 (Bad Request).
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
 * This property and osDisk are mutually exclusive and one of the properties
 * must be specified.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
 * For example, Canonical or MicrosoftWindowsServer.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
 * For example, UbuntuServer or WindowsServer.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
 * For example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
 * A value of 'latest' can be specified to select the latest version of an
 * image. If omitted, the default is 'latest'.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
 * This property can be specified only if the Batch account was created with
 * its poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris]
 * All the VHDs must be identical and must reside in an Azure Storage account
 * within the same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
 * Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId]
 * The Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems. You must specify a node agent SKU
 * which matches the selected image reference. To get the list of supported
 * node agent SKUs along with their list of verified image references, see the
 * 'List supported node agent SKUs' operation.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
 * This property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * If omitted, the default value is true.
 * @member {number} [poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
 * default value is 1. The maximum value of this setting depends on the size of
 * the compute nodes in the pool (the vmSize setting).
 * @member {object} [poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType]
 * Possible values include: 'spread', 'pack'
 * @member {moment.duration}
 * [poolInfo.autoPoolSpecification.pool.resizeTimeout] This timeout applies
 * only to manual scaling; it has no effect when enableAutoScale is set to
 * true. The default value is 15 minutes. The minimum value is 5 minutes. If
 * you specify a value less than 5 minutes, the Batch service rejects the
 * request with an error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request).
 * @member {number} [poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {number}
 * [poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes] This property
 * must not be specified if enableAutoScale is set to true. If enableAutoScale
 * is set to false, then you must set either targetDedicatedNodes,
 * targetLowPriorityNodes, or both.
 * @member {boolean} [poolInfo.autoPoolSpecification.pool.enableAutoScale] If
 * false, at least one of targetDedicateNodes and targetLowPriorityNodes must
 * be specified. If true, the autoScaleFormula element is required. The pool
 * automatically resizes according to the formula. The default value is false.
 * @member {string} [poolInfo.autoPoolSpecification.pool.autoScaleFormula] This
 * property must not be specified if enableAutoScale is set to false. It is
 * required if enableAutoScale is set to true. The formula is checked for
 * validity before the pool is created. If the formula is not valid, the Batch
 * service rejects the request with detailed error information.
 * @member {moment.duration}
 * [poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval] The
 * default value is 15 minutes. The minimum and maximum value are 5 minutes and
 * 168 hours respectively. If you specify a value less than 5 minutes or
 * greater than 168 hours, the Batch service rejects the request with an
 * invalid property value error; if you are calling the REST API directly, the
 * HTTP status code is 400 (Bad Request).
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication] Enabling
 * inter-node communication limits the maximum size of the pool due to
 * deployment restrictions on the nodes of the pool. This may result in the
 * pool not reaching its desired size. The default value is false.
 * @member {object} [poolInfo.autoPoolSpecification.pool.networkConfiguration]
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId] The
 * virtual network must be in the same region and subscription as the Azure
 * Batch account. The specified subnet should have enough free IP addresses to
 * accommodate the number of nodes in the pool. If the subnet doesn't have
 * enough free IP addresses, the pool will partially allocate compute nodes,
 * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
 * must have the 'Classic Virtual Machine Contributor' Role-Based Access
 * Control (RBAC) role for the specified VNet. The specified subnet must allow
 * communication from the Azure Batch service to be able to schedule tasks on
 * the compute nodes. This can be verified by checking if the specified VNet
 * has any associated Network Security Groups (NSG). If communication to the
 * compute nodes in the specified subnet is denied by an NSG, then the Batch
 * service will set the state of the compute nodes to unusable. For pools
 * created via virtualMachineConfiguration the Batch account must have
 * poolAllocationMode userSubscription in order to use a VNet. If the specified
 * VNet has any associated Network Security Groups (NSG), then a few reserved
 * system ports must be enabled for inbound communication. For pools created
 * with a virtual machine configuration, enable ports 29876 and 29877, as well
 * as port 22 for Linux and port 3389 for Windows. For pools created with a
 * cloud service configuration, enable ports 10100, 20100, and 30100. Also
 * enable outbound connections to Azure Storage on port 443. For more details
 * see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
 * Pool endpoint configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object} [poolInfo.autoPoolSpecification.pool.startTask]
 * @member {string} [poolInfo.autoPoolSpecification.pool.startTask.commandLine]
 * The command line does not run under a shell, and therefore cannot take
 * advantage of shell features such as environment variable expansion. If you
 * want to take advantage of such features, you should invoke the shell in the
 * command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.startTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity] If omitted, the
 * task runs as a non-administrative user unique to the task.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
 * Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {number}
 * [poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount] The Batch
 * service retries a task if its exit code is nonzero. Note that this value
 * specifically controls the number of retries. The Batch service will try the
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * the task. If the maximum retry count is -1, the Batch service retries the
 * task without limit.
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess] If true and
 * the start task fails on a compute node, the Batch service retries the start
 * task up to its maximum retry count (maxTaskRetryCount). If the task has
 * still not completed successfully after all retries, then the Batch service
 * marks the compute node unusable, and will not schedule tasks to it. This
 * condition can be detected via the node state and failure info details. If
 * false, the Batch service will not wait for the start task to complete. In
 * this case, other tasks can start executing on the compute node while the
 * start task is still running; and even if the start task fails, new tasks
 * will continue to be scheduled on the node. The default is false.
 * @member {array} [poolInfo.autoPoolSpecification.pool.certificateReferences]
 * For Windows compute nodes, the Batch service installs the certificates to
 * the specified certificate store and location. For Linux compute nodes, the
 * certificates are stored in a directory inside the task working directory and
 * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
 * query for this location. For certificates with visibility of 'remoteUser', a
 * 'certs' directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
 * @member {array} [poolInfo.autoPoolSpecification.pool.applicationLicenses]
 * The list of application licenses must be a subset of available Batch service
 * application licenses. If a license is requested which is not supported, pool
 * creation will fail.
 * @member {array} [poolInfo.autoPoolSpecification.pool.userAccounts]
 * @member {array} [poolInfo.autoPoolSpecification.pool.metadata] The Batch
 * service does not assign any meaning to metadata; it is solely for the use of
 * user code.
 * @member {array} [metadata] A list of name-value pairs associated with the
 * job as metadata. If omitted, the existing job metadata is left unchanged.
 */
export interface JobPatchParameter {
    priority?: number;
    onAllTasksComplete?: string;
    constraints?: JobConstraints;
    poolInfo?: PoolInformation;
    metadata?: MetadataItem[];
}
/**
 * @class
 * Initializes a new instance of the JobUpdateParameter class.
 * @constructor
 * @summary The set of changes to be made to a job.
 *
 * @member {number} [priority] The priority of the job. Priority values can
 * range from -1000 to 1000, with -1000 being the lowest priority and 1000
 * being the highest priority. If omitted, it is set to the default value 0.
 * @member {object} [constraints] The execution constraints for the job. If
 * omitted, the constraints are cleared.
 * @member {moment.duration} [constraints.maxWallClockTime] If the job does not
 * complete within the time limit, the Batch service terminates it and any
 * tasks that are still running. In this case, the termination reason will be
 * MaxWallClockTimeExpiry. If this property is not specified, there is no time
 * limit on how long the job may run.
 * @member {number} [constraints.maxTaskRetryCount] Note that this value
 * specifically controls the number of retries. The Batch service will try each
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries a task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * tasks. If the maximum retry count is -1, the Batch service retries tasks
 * without limit. The default value is 0 (no retries).
 * @member {object} poolInfo The pool on which the Batch service runs the job's
 * tasks. You may change the pool for a job only when the job is disabled. The
 * Update Job call will fail if you include the poolInfo element and the job is
 * not disabled. If you specify an autoPoolSpecification specification in the
 * poolInfo, only the keepAlive property can be updated, and then only if the
 * auto pool has a poolLifetimeOption of job.
 * @member {string} [poolInfo.poolId] You must ensure that the pool referenced
 * by this property exists. If the pool does not exist at the time the Batch
 * service tries to schedule a job, no tasks for the job will run until you
 * create a pool with that id. Note that the Batch service will not reject the
 * job request; it will simply not run tasks until the pool exists. You must
 * specify either the pool ID or the auto pool specification, but not both.
 * @member {object} [poolInfo.autoPoolSpecification] If auto pool creation
 * fails, the Batch service moves the job to a completed state, and the pool
 * creation error is set in the job's scheduling error property. The Batch
 * service manages the lifetime (both creation and, unless keepAlive is
 * specified, deletion) of the auto pool. Any user actions that affect the
 * lifetime of the auto pool while the job is active will result in unexpected
 * behavior. You must specify either the pool ID or the auto pool
 * specification, but not both.
 * @member {string} [poolInfo.autoPoolSpecification.autoPoolIdPrefix] The Batch
 * service assigns each auto pool a unique identifier on creation. To
 * distinguish between pools created for different purposes, you can specify
 * this element to add a prefix to the ID that is assigned. The prefix can be
 * up to 20 characters long.
 * @member {string} [poolInfo.autoPoolSpecification.poolLifetimeOption] When
 * the pool lifetime is jobSchedule the pool exists for the lifetime of the job
 * schedule. The Batch Service creates the pool when it creates the first job
 * on the schedule. You may apply this option only to job schedules, not to
 * jobs. When the pool lifetime is job the pool exists for the lifetime of the
 * job to which it is dedicated. The Batch service creates the pool when it
 * creates the job. If the 'job' option is applied to a job schedule, the Batch
 * service creates a new auto pool for every job created on the schedule.
 * Possible values include: 'jobSchedule', 'job'
 * @member {boolean} [poolInfo.autoPoolSpecification.keepAlive] If false, the
 * Batch service deletes the pool once its lifetime (as determined by the
 * poolLifetimeOption setting) expires; that is, when the job or job schedule
 * completes. If true, the Batch service does not delete the pool
 * automatically. It is up to the user to delete auto pools created with this
 * option.
 * @member {object} [poolInfo.autoPoolSpecification.pool]
 * @member {string} [poolInfo.autoPoolSpecification.pool.displayName] The
 * display name need not be unique and can contain any Unicode characters up to
 * a maximum length of 1024.
 * @member {string} [poolInfo.autoPoolSpecification.pool.vmSize] For
 * information about available sizes of virtual machines for Cloud Services
 * pools (pools created with cloudServiceConfiguration), see Sizes for Cloud
 * Services
 * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
 * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
 * For information about available VM sizes for pools using images from the
 * Virtual Machines Marketplace (pools created with
 * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
 * or Sizes for Virtual Machines (Windows)
 * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
 * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
 * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration] This
 * property must be specified if the pool needs to be created with Azure PaaS
 * VMs. This property and virtualMachineConfiguration are mutually exclusive
 * and one of the properties must be specified. If neither is specified then
 * the Batch service returns an error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request). This property cannot be
 * specified if the Batch account was created with its poolAllocationMode
 * property set to 'UserSubscription'.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily]
 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2
 * SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4,
 * equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows
 * Server 2016. For more information, see Azure Guest OS Releases
 * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
 * The default value is * which specifies the latest operating system version
 * for the specified OS family.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
 * This may differ from targetOSVersion if the pool state is Upgrading. In this
 * case some virtual machines may be on the targetOSVersion and some may be on
 * the currentOSVersion during the upgrade process. Once all virtual machines
 * have upgraded, currentOSVersion is updated to be the same as
 * targetOSVersion.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration] This
 * property must be specified if the pool needs to be created with Azure IaaS
 * VMs. This property and cloudServiceConfiguration are mutually exclusive and
 * one of the properties must be specified. If neither is specified then the
 * Batch service returns an error; if you are calling the REST API directly,
 * the HTTP status code is 400 (Bad Request).
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
 * This property and osDisk are mutually exclusive and one of the properties
 * must be specified.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
 * For example, Canonical or MicrosoftWindowsServer.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
 * For example, UbuntuServer or WindowsServer.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
 * For example, 14.04.0-LTS or 2012-R2-Datacenter.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
 * A value of 'latest' can be specified to select the latest version of an
 * image. If omitted, the default is 'latest'.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
 * This property can be specified only if the Batch account was created with
 * its poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris]
 * All the VHDs must be identical and must reside in an Azure Storage account
 * within the same subscription and same region as the Batch account. For best
 * performance, it is recommended that each VHD resides in a separate Azure
 * Storage account. Each VHD can serve upto 20 Windows compute nodes or 40
 * Linux compute nodes. You must supply enough VHD URIs to satisfy the
 * 'targetDedicated' property of the pool. If you do not supply enough VHD
 * URIs, the pool will partially allocate compute nodes, and a resize error
 * will occur.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
 * Values are:
 *
 * none - The caching mode for the disk is not enabled.
 * readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write.
 *
 * The default value for caching is none. For information about the caching
 * options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId]
 * The Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems. You must specify a node agent SKU
 * which matches the selected image reference. To get the list of supported
 * node agent SKUs along with their list of verified image references, see the
 * 'List supported node agent SKUs' operation.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
 * This property must not be specified if the imageReference or osDisk property
 * specifies a Linux OS image.
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * If omitted, the default value is true.
 * @member {number} [poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
 * default value is 1. The maximum value of this setting depends on the size of
 * the compute nodes in the pool (the vmSize setting).
 * @member {object} [poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType]
 * Possible values include: 'spread', 'pack'
 * @member {moment.duration}
 * [poolInfo.autoPoolSpecification.pool.resizeTimeout] This timeout applies
 * only to manual scaling; it has no effect when enableAutoScale is set to
 * true. The default value is 15 minutes. The minimum value is 5 minutes. If
 * you specify a value less than 5 minutes, the Batch service rejects the
 * request with an error; if you are calling the REST API directly, the HTTP
 * status code is 400 (Bad Request).
 * @member {number} [poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
 * This property must not be specified if enableAutoScale is set to true. If
 * enableAutoScale is set to false, then you must set either
 * targetDedicatedNodes, targetLowPriorityNodes, or both.
 * @member {number}
 * [poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes] This property
 * must not be specified if enableAutoScale is set to true. If enableAutoScale
 * is set to false, then you must set either targetDedicatedNodes,
 * targetLowPriorityNodes, or both.
 * @member {boolean} [poolInfo.autoPoolSpecification.pool.enableAutoScale] If
 * false, at least one of targetDedicateNodes and targetLowPriorityNodes must
 * be specified. If true, the autoScaleFormula element is required. The pool
 * automatically resizes according to the formula. The default value is false.
 * @member {string} [poolInfo.autoPoolSpecification.pool.autoScaleFormula] This
 * property must not be specified if enableAutoScale is set to false. It is
 * required if enableAutoScale is set to true. The formula is checked for
 * validity before the pool is created. If the formula is not valid, the Batch
 * service rejects the request with detailed error information.
 * @member {moment.duration}
 * [poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval] The
 * default value is 15 minutes. The minimum and maximum value are 5 minutes and
 * 168 hours respectively. If you specify a value less than 5 minutes or
 * greater than 168 hours, the Batch service rejects the request with an
 * invalid property value error; if you are calling the REST API directly, the
 * HTTP status code is 400 (Bad Request).
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication] Enabling
 * inter-node communication limits the maximum size of the pool due to
 * deployment restrictions on the nodes of the pool. This may result in the
 * pool not reaching its desired size. The default value is false.
 * @member {object} [poolInfo.autoPoolSpecification.pool.networkConfiguration]
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId] The
 * virtual network must be in the same region and subscription as the Azure
 * Batch account. The specified subnet should have enough free IP addresses to
 * accommodate the number of nodes in the pool. If the subnet doesn't have
 * enough free IP addresses, the pool will partially allocate compute nodes,
 * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
 * must have the 'Classic Virtual Machine Contributor' Role-Based Access
 * Control (RBAC) role for the specified VNet. The specified subnet must allow
 * communication from the Azure Batch service to be able to schedule tasks on
 * the compute nodes. This can be verified by checking if the specified VNet
 * has any associated Network Security Groups (NSG). If communication to the
 * compute nodes in the specified subnet is denied by an NSG, then the Batch
 * service will set the state of the compute nodes to unusable. For pools
 * created via virtualMachineConfiguration the Batch account must have
 * poolAllocationMode userSubscription in order to use a VNet. If the specified
 * VNet has any associated Network Security Groups (NSG), then a few reserved
 * system ports must be enabled for inbound communication. For pools created
 * with a virtual machine configuration, enable ports 29876 and 29877, as well
 * as port 22 for Linux and port 3389 for Windows. For pools created with a
 * cloud service configuration, enable ports 10100, 20100, and 30100. Also
 * enable outbound connections to Azure Storage on port 443. For more details
 * see:
 * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
 * Pool endpoint configuration is only supported on pools with the
 * virtualMachineConfiguration property.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools]
 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum
 * number of inbound NAT pools is exceeded the request fails with HTTP status
 * code 400.
 * @member {object} [poolInfo.autoPoolSpecification.pool.startTask]
 * @member {string} [poolInfo.autoPoolSpecification.pool.startTask.commandLine]
 * The command line does not run under a shell, and therefore cannot take
 * advantage of shell features such as environment variable expansion. If you
 * want to take advantage of such features, you should invoke the shell in the
 * command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.startTask.resourceFiles] Files listed
 * under this element are located in the task's working directory.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity] If omitted, the
 * task runs as a non-administrative user unique to the task.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {object}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser] The
 * userName and autoUser properties are mutually exclusive; you must specify
 * one but not both.
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
 * Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string}
 * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
 * nonAdmin - The auto user is a standard user without elevated access. admin -
 * The auto user is a user with elevated access and operates with full
 * Administrator permissions. The default value is nonAdmin. Possible values
 * include: 'nonAdmin', 'admin'
 * @member {number}
 * [poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount] The Batch
 * service retries a task if its exit code is nonzero. Note that this value
 * specifically controls the number of retries. The Batch service will try the
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * the task. If the maximum retry count is -1, the Batch service retries the
 * task without limit.
 * @member {boolean}
 * [poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess] If true and
 * the start task fails on a compute node, the Batch service retries the start
 * task up to its maximum retry count (maxTaskRetryCount). If the task has
 * still not completed successfully after all retries, then the Batch service
 * marks the compute node unusable, and will not schedule tasks to it. This
 * condition can be detected via the node state and failure info details. If
 * false, the Batch service will not wait for the start task to complete. In
 * this case, other tasks can start executing on the compute node while the
 * start task is still running; and even if the start task fails, new tasks
 * will continue to be scheduled on the node. The default is false.
 * @member {array} [poolInfo.autoPoolSpecification.pool.certificateReferences]
 * For Windows compute nodes, the Batch service installs the certificates to
 * the specified certificate store and location. For Linux compute nodes, the
 * certificates are stored in a directory inside the task working directory and
 * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
 * query for this location. For certificates with visibility of 'remoteUser', a
 * 'certs' directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array}
 * [poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
 * @member {array} [poolInfo.autoPoolSpecification.pool.applicationLicenses]
 * The list of application licenses must be a subset of available Batch service
 * application licenses. If a license is requested which is not supported, pool
 * creation will fail.
 * @member {array} [poolInfo.autoPoolSpecification.pool.userAccounts]
 * @member {array} [poolInfo.autoPoolSpecification.pool.metadata] The Batch
 * service does not assign any meaning to metadata; it is solely for the use of
 * user code.
 * @member {array} [metadata] A list of name-value pairs associated with the
 * job as metadata. If omitted, it takes the default value of an empty list; in
 * effect, any existing metadata is deleted.
 * @member {string} [onAllTasksComplete] The action the Batch service should
 * take when all tasks in the job are in the completed state. If omitted, the
 * completion behavior is set to noAction. If the current value is
 * terminateJob, this is an error because a job's completion behavior may not
 * be changed from terminateJob to noAction. You may not change the value from
 * terminatejob to noaction - that is, once you have engaged automatic job
 * termination, you cannot turn it off again. If you try to do this, the
 * request fails and Batch returns status code 400 (Bad Request) and an
 * 'invalid property value' error response. If you do not specify this element
 * in a PUT request, it is equivalent to passing noaction. This is an error if
 * the current value is terminatejob. Possible values include: 'noAction',
 * 'terminateJob'
 */
export interface JobUpdateParameter {
    priority?: number;
    constraints?: JobConstraints;
    poolInfo: PoolInformation;
    metadata?: MetadataItem[];
    onAllTasksComplete?: string;
}
/**
 * @class
 * Initializes a new instance of the PoolEnableAutoScaleParameter class.
 * @constructor
 * @summary Options for enabling automatic scaling on a pool.
 *
 * @member {string} [autoScaleFormula] The formula for the desired number of
 * compute nodes in the pool. The formula is checked for validity before it is
 * applied to the pool. If the formula is not valid, the Batch service rejects
 * the request with detailed error information. For more information about
 * specifying this formula, see Automatically scale compute nodes in an Azure
 * Batch pool
 * (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
 * @member {moment.duration} [autoScaleEvaluationInterval] The time interval at
 * which to automatically adjust the pool size according to the autoscale
 * formula. The default value is 15 minutes. The minimum and maximum value are
 * 5 minutes and 168 hours respectively. If you specify a value less than 5
 * minutes or greater than 168 hours, the Batch service rejects the request
 * with an invalid property value error; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request). If you specify a new
 * interval, then the existing autoscale evaluation schedule will be stopped
 * and a new autoscale evaluation schedule will be started, with its starting
 * time being the time when this request was issued.
 */
export interface PoolEnableAutoScaleParameter {
    autoScaleFormula?: string;
    autoScaleEvaluationInterval?: moment.Duration;
}
/**
 * @class
 * Initializes a new instance of the PoolEvaluateAutoScaleParameter class.
 * @constructor
 * @summary Options for evaluating an automatic scaling formula on a pool.
 *
 * @member {string} autoScaleFormula The formula for the desired number of
 * compute nodes in the pool. The formula is validated and its results
 * calculated, but it is not applied to the pool. To apply the formula to the
 * pool, 'Enable automatic scaling on a pool'. For more information about
 * specifying this formula, see Automatically scale compute nodes in an Azure
 * Batch pool
 * (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
 */
export interface PoolEvaluateAutoScaleParameter {
    autoScaleFormula: string;
}
/**
 * @class
 * Initializes a new instance of the PoolResizeParameter class.
 * @constructor
 * @summary Options for changing the size of a pool.
 *
 * @member {number} [targetDedicatedNodes] The desired number of dedicated
 * compute nodes in the pool.
 * @member {number} [targetLowPriorityNodes] The desired number of low-priority
 * compute nodes in the pool.
 * @member {moment.duration} [resizeTimeout] The timeout for allocation of
 * compute nodes to the pool or removal of compute nodes from the pool. The
 * default value is 15 minutes. The minimum value is 5 minutes. If you specify
 * a value less than 5 minutes, the Batch service returns an error; if you are
 * calling the REST API directly, the HTTP status code is 400 (Bad Request).
 * @member {string} [nodeDeallocationOption] Determines what to do with a node
 * and its running task(s) if the pool size is decreasing. The default value is
 * requeue. Possible values include: 'requeue', 'terminate', 'taskCompletion',
 * 'retainedData'
 */
export interface PoolResizeParameter {
    targetDedicatedNodes?: number;
    targetLowPriorityNodes?: number;
    resizeTimeout?: moment.Duration;
    nodeDeallocationOption?: string;
}
/**
 * @class
 * Initializes a new instance of the PoolUpdatePropertiesParameter class.
 * @constructor
 * @summary The set of changes to be made to a pool.
 *
 * @member {object} [startTask] A task to run on each compute node as it joins
 * the pool. The task runs when the node is added to the pool or when the node
 * is restarted. If this element is present, it overwrites any existing start
 * task. If omitted, any existing start task is removed from the pool.
 * @member {string} [startTask.commandLine] The command line does not run under
 * a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [startTask.resourceFiles] Files listed under this element
 * are located in the task's working directory.
 * @member {array} [startTask.environmentSettings]
 * @member {object} [startTask.userIdentity] If omitted, the task runs as a
 * non-administrative user unique to the task.
 * @member {string} [startTask.userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {object} [startTask.userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {string} [startTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [startTask.userIdentity.autoUser.elevationLevel] nonAdmin -
 * The auto user is a standard user without elevated access. admin - The auto
 * user is a user with elevated access and operates with full Administrator
 * permissions. The default value is nonAdmin. Possible values include:
 * 'nonAdmin', 'admin'
 * @member {number} [startTask.maxTaskRetryCount] The Batch service retries a
 * task if its exit code is nonzero. Note that this value specifically controls
 * the number of retries. The Batch service will try the task once, and may
 * then retry up to this limit. For example, if the maximum retry count is 3,
 * Batch tries the task up to 4 times (one initial try and 3 retries). If the
 * maximum retry count is 0, the Batch service does not retry the task. If the
 * maximum retry count is -1, the Batch service retries the task without limit.
 * @member {boolean} [startTask.waitForSuccess] If true and the start task
 * fails on a compute node, the Batch service retries the start task up to its
 * maximum retry count (maxTaskRetryCount). If the task has still not completed
 * successfully after all retries, then the Batch service marks the compute
 * node unusable, and will not schedule tasks to it. This condition can be
 * detected via the node state and failure info details. If false, the Batch
 * service will not wait for the start task to complete. In this case, other
 * tasks can start executing on the compute node while the start task is still
 * running; and even if the start task fails, new tasks will continue to be
 * scheduled on the node. The default is false.
 * @member {array} certificateReferences A list of certificates to be installed
 * on each compute node in the pool. This list replaces any existing
 * certificate references configured on the pool. If you specify an empty
 * collection, any existing certificate references are removed from the pool.
 * For Windows compute nodes, the Batch service installs the certificates to
 * the specified certificate store and location. For Linux compute nodes, the
 * certificates are stored in a directory inside the task working directory and
 * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
 * query for this location. For certificates with visibility of 'remoteUser', a
 * 'certs' directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array} applicationPackageReferences A list of application packages
 * to be installed on each compute node in the pool. The list replaces any
 * existing application package references on the pool. Changes to application
 * package references affect all new compute nodes joining the pool, but do not
 * affect compute nodes that are already in the pool until they are rebooted or
 * reimaged. If omitted, or if you specify an empty collection, any existing
 * application packages references are removed from the pool.
 * @member {array} metadata A list of name-value pairs associated with the pool
 * as metadata. This list replaces any existing metadata configured on the
 * pool. If omitted, or if you specify an empty collection, any existing
 * metadata is removed from the pool.
 */
export interface PoolUpdatePropertiesParameter {
    startTask?: StartTask;
    certificateReferences: CertificateReference[];
    applicationPackageReferences: ApplicationPackageReference[];
    metadata: MetadataItem[];
}
/**
 * @class
 * Initializes a new instance of the PoolUpgradeOSParameter class.
 * @constructor
 * @summary Options for upgrading the operating system of compute nodes in a
 * pool.
 *
 * @member {string} targetOSVersion The Azure Guest OS version to be installed
 * on the virtual machines in the pool.
 */
export interface PoolUpgradeOSParameter {
    targetOSVersion: string;
}
/**
 * @class
 * Initializes a new instance of the PoolPatchParameter class.
 * @constructor
 * @summary The set of changes to be made to a pool.
 *
 * @member {object} [startTask] A task to run on each compute node as it joins
 * the pool. The task runs when the node is added to the pool or when the node
 * is restarted. If this element is present, it overwrites any existing start
 * task. If omitted, any existing start task is left unchanged.
 * @member {string} [startTask.commandLine] The command line does not run under
 * a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * @member {array} [startTask.resourceFiles] Files listed under this element
 * are located in the task's working directory.
 * @member {array} [startTask.environmentSettings]
 * @member {object} [startTask.userIdentity] If omitted, the task runs as a
 * non-administrative user unique to the task.
 * @member {string} [startTask.userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {object} [startTask.userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 * @member {string} [startTask.userIdentity.autoUser.scope] Values are:
 *
 * pool - specifies that the task runs as the common auto user account which is
 * created on every node in a pool.
 * task - specifies that the service should create a new user for the task.
 * The default value is task. Possible values include: 'task', 'pool'
 * @member {string} [startTask.userIdentity.autoUser.elevationLevel] nonAdmin -
 * The auto user is a standard user without elevated access. admin - The auto
 * user is a user with elevated access and operates with full Administrator
 * permissions. The default value is nonAdmin. Possible values include:
 * 'nonAdmin', 'admin'
 * @member {number} [startTask.maxTaskRetryCount] The Batch service retries a
 * task if its exit code is nonzero. Note that this value specifically controls
 * the number of retries. The Batch service will try the task once, and may
 * then retry up to this limit. For example, if the maximum retry count is 3,
 * Batch tries the task up to 4 times (one initial try and 3 retries). If the
 * maximum retry count is 0, the Batch service does not retry the task. If the
 * maximum retry count is -1, the Batch service retries the task without limit.
 * @member {boolean} [startTask.waitForSuccess] If true and the start task
 * fails on a compute node, the Batch service retries the start task up to its
 * maximum retry count (maxTaskRetryCount). If the task has still not completed
 * successfully after all retries, then the Batch service marks the compute
 * node unusable, and will not schedule tasks to it. This condition can be
 * detected via the node state and failure info details. If false, the Batch
 * service will not wait for the start task to complete. In this case, other
 * tasks can start executing on the compute node while the start task is still
 * running; and even if the start task fails, new tasks will continue to be
 * scheduled on the node. The default is false.
 * @member {array} [certificateReferences] A list of certificates to be
 * installed on each compute node in the pool. If this element is present, it
 * replaces any existing certificate references configured on the pool. If
 * omitted, any existing certificate references are left unchanged. For Windows
 * compute nodes, the Batch service installs the certificates to the specified
 * certificate store and location. For Linux compute nodes, the certificates
 * are stored in a directory inside the task working directory and an
 * environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
 * query for this location. For certificates with visibility of 'remoteUser', a
 * 'certs' directory is created in the user's home directory (e.g.,
 * /home/{user-name}/certs) and certificates are placed in that directory.
 * @member {array} [applicationPackageReferences] A list of application
 * packages to be installed on each compute node in the pool. Changes to
 * application package references affect all new compute nodes joining the
 * pool, but do not affect compute nodes that are already in the pool until
 * they are rebooted or reimaged. If this element is present, it replaces any
 * existing application package references. If you specify an empty collection,
 * then all application package references are removed from the pool. If
 * omitted, any existing application package references are left unchanged.
 * @member {array} [metadata] A list of name-value pairs associated with the
 * pool as metadata. If this element is present, it replaces any existing
 * metadata configured on the pool. If you specify an empty collection, any
 * metadata is removed from the pool. If omitted, any existing metadata is left
 * unchanged.
 */
export interface PoolPatchParameter {
    startTask?: StartTask;
    certificateReferences?: CertificateReference[];
    applicationPackageReferences?: ApplicationPackageReference[];
    metadata?: MetadataItem[];
}
/**
 * @class
 * Initializes a new instance of the TaskUpdateParameter class.
 * @constructor
 * @summary The set of changes to be made to a task.
 *
 * @member {object} [constraints] Constraints that apply to this task. If
 * omitted, the task is given the default constraints. For multi-instance
 * tasks, updating the retention time applies only to the primary task and not
 * subtasks.
 * @member {moment.duration} [constraints.maxWallClockTime] If this is not
 * specified, there is no time limit on how long the task may run.
 * @member {moment.duration} [constraints.retentionTime] The default is
 * infinite, i.e. the task directory will be retained until the compute node is
 * removed or reimaged.
 * @member {number} [constraints.maxTaskRetryCount] Note that this value
 * specifically controls the number of retries. The Batch service will try the
 * task once, and may then retry up to this limit. For example, if the maximum
 * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
 * retries). If the maximum retry count is 0, the Batch service does not retry
 * the task. If the maximum retry count is -1, the Batch service retries the
 * task without limit.
 */
export interface TaskUpdateParameter {
    constraints?: TaskConstraints;
}
/**
 * @class
 * Initializes a new instance of the NodeUpdateUserParameter class.
 * @constructor
 * @summary The set of changes to be made to a user account on a node.
 *
 * @member {string} [password] The password of the account. The password is
 * required for Windows nodes (those created with 'cloudServiceConfiguration',
 * or created with 'virtualMachineConfiguration' using a Windows image
 * reference). For Linux compute nodes, the password can optionally be
 * specified along with the sshPublicKey property. If omitted, any existing
 * password is removed.
 * @member {date} [expiryTime] The time at which the account should expire. If
 * omitted, the default is 1 day from the current time. For Linux compute
 * nodes, the expiryTime has a precision up to a day.
 * @member {string} [sshPublicKey] The SSH public key that can be used for
 * remote login to the compute node. The public key should be compatible with
 * OpenSSH encoding and should be base 64 encoded. This property can be
 * specified only for Linux nodes. If this is specified for a Windows node,
 * then the Batch service rejects the request; if you are calling the REST API
 * directly, the HTTP status code is 400 (Bad Request). If omitted, any
 * existing SSH public key is removed.
 */
export interface NodeUpdateUserParameter {
    password?: string;
    expiryTime?: Date;
    sshPublicKey?: string;
}
/**
 * @class
 * Initializes a new instance of the NodeRebootParameter class.
 * @constructor
 * @summary Options for rebooting a compute node.
 *
 * @member {string} [nodeRebootOption] When to reboot the compute node and what
 * to do with currently running tasks. Values are:
 *
 * requeue - Terminate running task processes and requeue the tasks. The tasks
 * will run again when a node is available. Restart the node as soon as tasks
 * have been terminated.
 * terminate - Terminate running tasks. The tasks will not run again. Restart
 * the node as soon as tasks have been terminated.
 * taskcompletion - Allow currently running tasks to complete. Schedule no new
 * tasks while waiting. Restart the node when all tasks have completed.
 * retaineddata - Allow currently running tasks to complete, then wait for all
 * task data retention periods to expire. Schedule no new tasks while waiting.
 * Restart the node when all task retention periods have expired.
 *
 * The default value is requeue. Possible values include: 'requeue',
 * 'terminate', 'taskCompletion', 'retainedData'
 */
export interface NodeRebootParameter {
    nodeRebootOption?: string;
}
/**
 * @class
 * Initializes a new instance of the NodeReimageParameter class.
 * @constructor
 * @summary Options for reimaging a compute node.
 *
 * @member {string} [nodeReimageOption] When to reimage the compute node and
 * what to do with currently running tasks. Values are:
 *
 * requeue - Terminate running task processes and requeue the tasks. The tasks
 * will run again when a node is available. Reimage the node as soon as tasks
 * have been terminated.
 * terminate - Terminate running tasks. The tasks will not run again. Reimage
 * the node as soon as tasks have been terminated.
 * taskcompletion - Allow currently running tasks to complete. Schedule no new
 * tasks while waiting. Reimage the node when all tasks have completed.
 * retaineddata - Allow currently running tasks to complete, then wait for all
 * task data retention periods to expire. Schedule no new tasks while waiting.
 * Reimage the node when all task retention periods have expired.
 *
 * The default value is requeue. Possible values include: 'requeue',
 * 'terminate', 'taskCompletion', 'retainedData'
 */
export interface NodeReimageParameter {
    nodeReimageOption?: string;
}
/**
 * @class
 * Initializes a new instance of the NodeDisableSchedulingParameter class.
 * @constructor
 * @summary Options for disabling scheduling on a compute node.
 *
 * @member {string} [nodeDisableSchedulingOption] What to do with currently
 * running tasks when disabling task scheduling on the compute node. Values
 * are:
 *
 * requeue - Terminate running task processes and requeue the tasks. The tasks
 * may run again on other compute nodes, or when task scheduling is re-enabled
 * on this node. Enter offline state as soon as tasks have been terminated.
 * terminate - Terminate running tasks. The tasks will not run again. Enter
 * offline state as soon as tasks have been terminated.
 * taskcompletion - Allow currently running tasks to complete. Schedule no new
 * tasks while waiting. Enter offline state when all tasks have completed.
 *
 * The default value is requeue. Possible values include: 'requeue',
 * 'terminate', 'taskCompletion'
 */
export interface NodeDisableSchedulingParameter {
    nodeDisableSchedulingOption?: string;
}
/**
 * @class
 * Initializes a new instance of the NodeRemoveParameter class.
 * @constructor
 * @summary Options for removing compute nodes from a pool.
 *
 * @member {array} nodeList A list containing the IDs of the compute nodes to
 * be removed from the specified pool.
 * @member {moment.duration} [resizeTimeout] The timeout for removal of compute
 * nodes to the pool. The default value is 15 minutes. The minimum value is 5
 * minutes. If you specify a value less than 5 minutes, the Batch service
 * returns an error; if you are calling the REST API directly, the HTTP status
 * code is 400 (Bad Request).
 * @member {string} [nodeDeallocationOption] Determines what to do with a node
 * and its running task(s) after it has been selected for deallocation. The
 * default value is requeue. Possible values include: 'requeue', 'terminate',
 * 'taskCompletion', 'retainedData'
 */
export interface NodeRemoveParameter {
    nodeList: string[];
    resizeTimeout?: moment.Duration;
    nodeDeallocationOption?: string;
}
/**
 * @class
 * Initializes a new instance of the ApplicationListOptions class.
 * @constructor
 * Additional parameters for the Application_list operation.
 *
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 applications can be returned. Default value:
 * 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ApplicationListOptions {
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ApplicationGetOptions class.
 * @constructor
 * Additional parameters for the Application_get operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ApplicationGetOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolListUsageMetricsOptions class.
 * @constructor
 * Additional parameters for the Pool_listUsageMetrics operation.
 *
 * @member {date} [startTime] The earliest time from which to include metrics.
 * This must be at least two and a half hours before the current time. If not
 * specified this defaults to the start time of the last aggregation interval
 * currently available.
 * @member {date} [endTime] The latest time from which to include metrics. This
 * must be at least two hours before the current time. If not specified this
 * defaults to the end time of the last aggregation interval currently
 * available.
 * @member {string} [filter] An OData $filter clause. If this is not specified
 * the response includes all pools that existed in the account in the time
 * range of the returned aggregation intervals.
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 results will be returned. Default value: 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface PoolListUsageMetricsOptions {
    startTime?: Date;
    endTime?: Date;
    filter?: string;
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolGetAllLifetimeStatisticsOptions class.
 * @constructor
 * Additional parameters for the Pool_getAllLifetimeStatistics operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface PoolGetAllLifetimeStatisticsOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolAddOptions class.
 * @constructor
 * Additional parameters for the Pool_add operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface PoolAddOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolListOptions class.
 * @constructor
 * Additional parameters for the Pool_list operation.
 *
 * @member {string} [filter] An OData $filter clause.
 * @member {string} [select] An OData $select clause.
 * @member {string} [expand] An OData $expand clause.
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 pools can be returned. Default value: 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface PoolListOptions {
    filter?: string;
    select?: string;
    expand?: string;
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolDeleteMethodOptions class.
 * @constructor
 * Additional parameters for the Pool_deleteMethod operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface PoolDeleteMethodOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolExistsOptions class.
 * @constructor
 * Additional parameters for the Pool_exists operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface PoolExistsOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolGetOptions class.
 * @constructor
 * Additional parameters for the Pool_get operation.
 *
 * @member {string} [select] An OData $select clause.
 * @member {string} [expand] An OData $expand clause.
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface PoolGetOptions {
    select?: string;
    expand?: string;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolPatchOptions class.
 * @constructor
 * Additional parameters for the Pool_patch operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface PoolPatchOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolDisableAutoScaleOptions class.
 * @constructor
 * Additional parameters for the Pool_disableAutoScale operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface PoolDisableAutoScaleOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolEnableAutoScaleOptions class.
 * @constructor
 * Additional parameters for the Pool_enableAutoScale operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface PoolEnableAutoScaleOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolEvaluateAutoScaleOptions class.
 * @constructor
 * Additional parameters for the Pool_evaluateAutoScale operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface PoolEvaluateAutoScaleOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolResizeOptions class.
 * @constructor
 * Additional parameters for the Pool_resize operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface PoolResizeOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolStopResizeOptions class.
 * @constructor
 * Additional parameters for the Pool_stopResize operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface PoolStopResizeOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolUpdatePropertiesOptions class.
 * @constructor
 * Additional parameters for the Pool_updateProperties operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface PoolUpdatePropertiesOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolUpgradeOSOptions class.
 * @constructor
 * Additional parameters for the Pool_upgradeOS operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface PoolUpgradeOSOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolRemoveNodesOptions class.
 * @constructor
 * Additional parameters for the Pool_removeNodes operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface PoolRemoveNodesOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the AccountListNodeAgentSkusOptions class.
 * @constructor
 * Additional parameters for the Account_listNodeAgentSkus operation.
 *
 * @member {string} [filter] An OData $filter clause.
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 results will be returned. Default value: 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface AccountListNodeAgentSkusOptions {
    filter?: string;
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobGetAllLifetimeStatisticsOptions class.
 * @constructor
 * Additional parameters for the Job_getAllLifetimeStatistics operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface JobGetAllLifetimeStatisticsOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobDeleteMethodOptions class.
 * @constructor
 * Additional parameters for the Job_deleteMethod operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobDeleteMethodOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobGetOptions class.
 * @constructor
 * Additional parameters for the Job_get operation.
 *
 * @member {string} [select] An OData $select clause.
 * @member {string} [expand] An OData $expand clause.
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobGetOptions {
    select?: string;
    expand?: string;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobPatchOptions class.
 * @constructor
 * Additional parameters for the Job_patch operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobPatchOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobUpdateOptions class.
 * @constructor
 * Additional parameters for the Job_update operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobUpdateOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobDisableOptions class.
 * @constructor
 * Additional parameters for the Job_disable operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobDisableOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobEnableOptions class.
 * @constructor
 * Additional parameters for the Job_enable operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobEnableOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobTerminateOptions class.
 * @constructor
 * Additional parameters for the Job_terminate operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobTerminateOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobAddOptions class.
 * @constructor
 * Additional parameters for the Job_add operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface JobAddOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobListOptions class.
 * @constructor
 * Additional parameters for the Job_list operation.
 *
 * @member {string} [filter] An OData $filter clause.
 * @member {string} [select] An OData $select clause.
 * @member {string} [expand] An OData $expand clause.
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 jobs can be returned. Default value: 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface JobListOptions {
    filter?: string;
    select?: string;
    expand?: string;
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobListFromJobScheduleOptions class.
 * @constructor
 * Additional parameters for the Job_listFromJobSchedule operation.
 *
 * @member {string} [filter] An OData $filter clause.
 * @member {string} [select] An OData $select clause.
 * @member {string} [expand] An OData $expand clause.
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 jobs can be returned. Default value: 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface JobListFromJobScheduleOptions {
    filter?: string;
    select?: string;
    expand?: string;
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobListPreparationAndReleaseTaskStatusOptions class.
 * @constructor
 * Additional parameters for the Job_listPreparationAndReleaseTaskStatus
 * operation.
 *
 * @member {string} [filter] An OData $filter clause. To get the status of the
 * Job Preparation and Job Release tasks on a specific compute node, use
 * "nodeId eq '{desired-node-id}'"
 * @member {string} [select] An OData $select clause.
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 tasks can be returned. Default value: 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface JobListPreparationAndReleaseTaskStatusOptions {
    filter?: string;
    select?: string;
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobGetTaskCountsOptions class.
 * @constructor
 * Additional parameters for the Job_getTaskCounts operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface JobGetTaskCountsOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the CertificateAddOptions class.
 * @constructor
 * Additional parameters for the Certificate_add operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface CertificateAddOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the CertificateListOptions class.
 * @constructor
 * Additional parameters for the Certificate_list operation.
 *
 * @member {string} [filter] An OData $filter clause.
 * @member {string} [select] An OData $select clause.
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 certificates can be returned. Default value:
 * 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface CertificateListOptions {
    filter?: string;
    select?: string;
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the CertificateCancelDeletionOptions class.
 * @constructor
 * Additional parameters for the Certificate_cancelDeletion operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface CertificateCancelDeletionOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the CertificateDeleteMethodOptions class.
 * @constructor
 * Additional parameters for the Certificate_deleteMethod operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface CertificateDeleteMethodOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the CertificateGetOptions class.
 * @constructor
 * Additional parameters for the Certificate_get operation.
 *
 * @member {string} [select] An OData $select clause.
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface CertificateGetOptions {
    select?: string;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the FileDeleteFromTaskOptions class.
 * @constructor
 * Additional parameters for the File_deleteFromTask operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface FileDeleteFromTaskOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the FileGetFromTaskOptions class.
 * @constructor
 * Additional parameters for the File_getFromTask operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ocpRange] The byte range to be retrieved. The default is
 * to retrieve the entire file. The format is bytes=startRange-endRange.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface FileGetFromTaskOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ocpRange?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the FileGetPropertiesFromTaskOptions class.
 * @constructor
 * Additional parameters for the File_getPropertiesFromTask operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface FileGetPropertiesFromTaskOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the FileDeleteFromComputeNodeOptions class.
 * @constructor
 * Additional parameters for the File_deleteFromComputeNode operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface FileDeleteFromComputeNodeOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the FileGetFromComputeNodeOptions class.
 * @constructor
 * Additional parameters for the File_getFromComputeNode operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ocpRange] The byte range to be retrieved. The default is
 * to retrieve the entire file. The format is bytes=startRange-endRange.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface FileGetFromComputeNodeOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ocpRange?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the FileGetPropertiesFromComputeNodeOptions class.
 * @constructor
 * Additional parameters for the File_getPropertiesFromComputeNode operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface FileGetPropertiesFromComputeNodeOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the FileListFromTaskOptions class.
 * @constructor
 * Additional parameters for the File_listFromTask operation.
 *
 * @member {string} [filter] An OData $filter clause.
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 files can be returned. Default value: 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface FileListFromTaskOptions {
    filter?: string;
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the FileListFromComputeNodeOptions class.
 * @constructor
 * Additional parameters for the File_listFromComputeNode operation.
 *
 * @member {string} [filter] An OData $filter clause.
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 files can be returned. Default value: 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface FileListFromComputeNodeOptions {
    filter?: string;
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleExistsOptions class.
 * @constructor
 * Additional parameters for the JobSchedule_exists operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobScheduleExistsOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleDeleteMethodOptions class.
 * @constructor
 * Additional parameters for the JobSchedule_deleteMethod operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobScheduleDeleteMethodOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleGetOptions class.
 * @constructor
 * Additional parameters for the JobSchedule_get operation.
 *
 * @member {string} [select] An OData $select clause.
 * @member {string} [expand] An OData $expand clause.
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobScheduleGetOptions {
    select?: string;
    expand?: string;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobSchedulePatchOptions class.
 * @constructor
 * Additional parameters for the JobSchedule_patch operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobSchedulePatchOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleUpdateOptions class.
 * @constructor
 * Additional parameters for the JobSchedule_update operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobScheduleUpdateOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleDisableOptions class.
 * @constructor
 * Additional parameters for the JobSchedule_disable operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobScheduleDisableOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleEnableOptions class.
 * @constructor
 * Additional parameters for the JobSchedule_enable operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobScheduleEnableOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleTerminateOptions class.
 * @constructor
 * Additional parameters for the JobSchedule_terminate operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface JobScheduleTerminateOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleAddOptions class.
 * @constructor
 * Additional parameters for the JobSchedule_add operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface JobScheduleAddOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleListOptions class.
 * @constructor
 * Additional parameters for the JobSchedule_list operation.
 *
 * @member {string} [filter] An OData $filter clause.
 * @member {string} [select] An OData $select clause.
 * @member {string} [expand] An OData $expand clause.
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 job schedules can be returned. Default value:
 * 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface JobScheduleListOptions {
    filter?: string;
    select?: string;
    expand?: string;
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the TaskAddOptions class.
 * @constructor
 * Additional parameters for the Task_add operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface TaskAddOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the TaskListOptions class.
 * @constructor
 * Additional parameters for the Task_list operation.
 *
 * @member {string} [filter] An OData $filter clause.
 * @member {string} [select] An OData $select clause.
 * @member {string} [expand] An OData $expand clause.
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 tasks can be returned. Default value: 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface TaskListOptions {
    filter?: string;
    select?: string;
    expand?: string;
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the TaskAddCollectionOptions class.
 * @constructor
 * Additional parameters for the Task_addCollection operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface TaskAddCollectionOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the TaskDeleteMethodOptions class.
 * @constructor
 * Additional parameters for the Task_deleteMethod operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface TaskDeleteMethodOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the TaskGetOptions class.
 * @constructor
 * Additional parameters for the Task_get operation.
 *
 * @member {string} [select] An OData $select clause.
 * @member {string} [expand] An OData $expand clause.
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface TaskGetOptions {
    select?: string;
    expand?: string;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the TaskUpdateOptions class.
 * @constructor
 * Additional parameters for the Task_update operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface TaskUpdateOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the TaskListSubtasksOptions class.
 * @constructor
 * Additional parameters for the Task_listSubtasks operation.
 *
 * @member {string} [select] An OData $select clause.
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface TaskListSubtasksOptions {
    select?: string;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the TaskTerminateOptions class.
 * @constructor
 * Additional parameters for the Task_terminate operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface TaskTerminateOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the TaskReactivateOptions class.
 * @constructor
 * Additional parameters for the Task_reactivate operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 * @member {string} [ifMatch] An ETag value associated with the version of the
 * resource known to the client. The operation will be performed only if the
 * resource's current ETag on the service exactly matches the value specified
 * by the client.
 * @member {string} [ifNoneMatch] An ETag value associated with the version of
 * the resource known to the client. The operation will be performed only if
 * the resource's current ETag on the service does not match the value
 * specified by the client.
 * @member {date} [ifModifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has been modified since the specified
 * time.
 * @member {date} [ifUnmodifiedSince] A timestamp indicating the last modified
 * time of the resource known to the client. The operation will be performed
 * only if the resource on the service has not been modified since the
 * specified time.
 */
export interface TaskReactivateOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
    ifMatch?: string;
    ifNoneMatch?: string;
    ifModifiedSince?: Date;
    ifUnmodifiedSince?: Date;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeAddUserOptions class.
 * @constructor
 * Additional parameters for the ComputeNode_addUser operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ComputeNodeAddUserOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeDeleteUserOptions class.
 * @constructor
 * Additional parameters for the ComputeNode_deleteUser operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ComputeNodeDeleteUserOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeUpdateUserOptions class.
 * @constructor
 * Additional parameters for the ComputeNode_updateUser operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ComputeNodeUpdateUserOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeGetOptions class.
 * @constructor
 * Additional parameters for the ComputeNode_get operation.
 *
 * @member {string} [select] An OData $select clause.
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ComputeNodeGetOptions {
    select?: string;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeRebootOptions class.
 * @constructor
 * Additional parameters for the ComputeNode_reboot operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ComputeNodeRebootOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeReimageOptions class.
 * @constructor
 * Additional parameters for the ComputeNode_reimage operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ComputeNodeReimageOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeDisableSchedulingOptions class.
 * @constructor
 * Additional parameters for the ComputeNode_disableScheduling operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ComputeNodeDisableSchedulingOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeEnableSchedulingOptions class.
 * @constructor
 * Additional parameters for the ComputeNode_enableScheduling operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ComputeNodeEnableSchedulingOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeGetRemoteLoginSettingsOptions class.
 * @constructor
 * Additional parameters for the ComputeNode_getRemoteLoginSettings operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ComputeNodeGetRemoteLoginSettingsOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeGetRemoteDesktopOptions class.
 * @constructor
 * Additional parameters for the ComputeNode_getRemoteDesktop operation.
 *
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ComputeNodeGetRemoteDesktopOptions {
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeListOptions class.
 * @constructor
 * Additional parameters for the ComputeNode_list operation.
 *
 * @member {string} [filter] An OData $filter clause..
 * @member {string} [select] An OData $select clause.
 * @member {number} [maxResults] The maximum number of items to return in the
 * response. A maximum of 1000 nodes can be returned. Default value: 1000 .
 * @member {number} [timeout] The maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ComputeNodeListOptions {
    filter?: string;
    select?: string;
    maxResults?: number;
    timeout?: number;
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ApplicationListNextOptions class.
 * @constructor
 * Additional parameters for the listNext operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ApplicationListNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolListUsageMetricsNextOptions class.
 * @constructor
 * Additional parameters for the listUsageMetricsNext operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface PoolListUsageMetricsNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the PoolListNextOptions class.
 * @constructor
 * Additional parameters for the listNext operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface PoolListNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the AccountListNodeAgentSkusNextOptions class.
 * @constructor
 * Additional parameters for the listNodeAgentSkusNext operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface AccountListNodeAgentSkusNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobListNextOptions class.
 * @constructor
 * Additional parameters for the listNext operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface JobListNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobListFromJobScheduleNextOptions class.
 * @constructor
 * Additional parameters for the listFromJobScheduleNext operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface JobListFromJobScheduleNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobListPreparationAndReleaseTaskStatusNextOptions class.
 * @constructor
 * Additional parameters for the listPreparationAndReleaseTaskStatusNext
 * operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface JobListPreparationAndReleaseTaskStatusNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the CertificateListNextOptions class.
 * @constructor
 * Additional parameters for the listNext operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface CertificateListNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the FileListFromTaskNextOptions class.
 * @constructor
 * Additional parameters for the listFromTaskNext operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface FileListFromTaskNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the FileListFromComputeNodeNextOptions class.
 * @constructor
 * Additional parameters for the listFromComputeNodeNext operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface FileListFromComputeNodeNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the JobScheduleListNextOptions class.
 * @constructor
 * Additional parameters for the listNext operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface JobScheduleListNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the TaskListNextOptions class.
 * @constructor
 * Additional parameters for the listNext operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface TaskListNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeListNextOptions class.
 * @constructor
 * Additional parameters for the listNext operation.
 *
 * @member {string} [clientRequestId] The caller-generated request identity, in
 * the form of a GUID with no decoration such as curly braces, e.g.
 * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
 * @member {boolean} [returnClientRequestId] Whether the server should return
 * the client-request-id in the response. Default value: false .
 * @member {date} [ocpDate] The time the request was issued. Client libraries
 * typically set this to the current system clock time; set it explicitly if
 * you are calling the REST API directly.
 */
export interface ComputeNodeListNextOptions {
    clientRequestId?: string;
    returnClientRequestId?: boolean;
    ocpDate?: Date;
}
/**
 * @class
 * Initializes a new instance of the ApplicationListResult class.
 * @constructor
 * @summary The result of listing the applications available in an account.
 *
 * @member {string} [odatanextLink]
 */
export interface ApplicationListResult extends Array<ApplicationSummary> {
    odatanextLink?: string;
}
/**
 * @class
 * Initializes a new instance of the PoolListUsageMetricsResult class.
 * @constructor
 * @summary The result of a listing the usage metrics for an account.
 *
 * @member {string} [odatanextLink]
 */
export interface PoolListUsageMetricsResult extends Array<PoolUsageMetrics> {
    odatanextLink?: string;
}
/**
 * @class
 * Initializes a new instance of the CloudPoolListResult class.
 * @constructor
 * @summary The result of listing the pools in an account.
 *
 * @member {string} [odatanextLink]
 */
export interface CloudPoolListResult extends Array<CloudPool> {
    odatanextLink?: string;
}
/**
 * @class
 * Initializes a new instance of the AccountListNodeAgentSkusResult class.
 * @constructor
 * @summary The result of listing the supported node agent SKUs.
 *
 * @member {string} [odatanextLink]
 */
export interface AccountListNodeAgentSkusResult extends Array<NodeAgentSku> {
    odatanextLink?: string;
}
/**
 * @class
 * Initializes a new instance of the CloudJobListResult class.
 * @constructor
 * @summary The result of listing the jobs in an account.
 *
 * @member {string} [odatanextLink]
 */
export interface CloudJobListResult extends Array<CloudJob> {
    odatanextLink?: string;
}
/**
 * @class
 * Initializes a new instance of the CloudJobListPreparationAndReleaseTaskStatusResult class.
 * @constructor
 * @summary The result of listing the status of the Job Preparation and Job
 * Release tasks for a job.
 *
 * @member {string} [odatanextLink]
 */
export interface CloudJobListPreparationAndReleaseTaskStatusResult extends Array<JobPreparationAndReleaseTaskExecutionInformation> {
    odatanextLink?: string;
}
/**
 * @class
 * Initializes a new instance of the CertificateListResult class.
 * @constructor
 * @summary The result of listing the certificates in the account.
 *
 * @member {string} [odatanextLink]
 */
export interface CertificateListResult extends Array<Certificate> {
    odatanextLink?: string;
}
/**
 * @class
 * Initializes a new instance of the NodeFileListResult class.
 * @constructor
 * @summary The result of listing the files on a compute node, or the files
 * associated with a task on a node.
 *
 * @member {string} [odatanextLink]
 */
export interface NodeFileListResult extends Array<NodeFile> {
    odatanextLink?: string;
}
/**
 * @class
 * Initializes a new instance of the CloudJobScheduleListResult class.
 * @constructor
 * @summary The result of listing the job schedules in an account.
 *
 * @member {string} [odatanextLink]
 */
export interface CloudJobScheduleListResult extends Array<CloudJobSchedule> {
    odatanextLink?: string;
}
/**
 * @class
 * Initializes a new instance of the CloudTaskListResult class.
 * @constructor
 * @summary The result of listing the tasks in a job.
 *
 * @member {string} [odatanextLink]
 */
export interface CloudTaskListResult extends Array<CloudTask> {
    odatanextLink?: string;
}
/**
 * @class
 * Initializes a new instance of the ComputeNodeListResult class.
 * @constructor
 * @summary The result of listing the compute nodes in a pool.
 *
 * @member {string} [odatanextLink]
 */
export interface ComputeNodeListResult extends Array<ComputeNode> {
    odatanextLink?: string;
}