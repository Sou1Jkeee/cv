function appendExperience(id, endDate, startDate) {
    document.getElementById(id).append(moment.duration(endDate.diff(startDate, 'month') + 1, 'month').humanize());
}

document.addEventListener('DOMContentLoaded', function() {
    moment.locale('ru');
    let now = moment();
    let stDate = moment('20201008');
    let eoDate = moment('20210709');
    let sftDate = moment('20220328');
    let expDate = moment('20190909');
    let age = moment('19890902');

    document.getElementById('age').append(moment.duration(now.diff(age, 'years'), 'years').humanize());
    document.getElementById('exp').append(moment.duration(now.diff(expDate)).humanize());

    appendExperience('st', eoDate, stDate);
    appendExperience('eo', sftDate, eoDate);
    appendExperience('sft', now, sftDate);
}, false);
