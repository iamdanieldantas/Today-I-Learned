const connetion = require('../database/connection')

module.exports = {
  async list(req, res) {
    const { tag_name } = req.query;
    let tools;

    if (tag_name) {
      tools = await connetion('tools')
        .join('tags', 'tags.tools_id', '=', 'tools.id')
        .select([
          'tools.*',
          'tags.tag_name'
        ])
        .where('tags.tag_name', tag_name);
    } else {
      tools = await connetion('tools')
        .join('tags', 'tags.tools_id', '=', 'tools.id')
        .select([
          'tools.id',
          'tools.title',
          'tools.link',
          'tools.description',
          'tags.tag_name'
        ]);
    }

    return res.json(tools);
  },

  async create(req, res) {
    const { title, link, description, tags } = req.body;

    const tools_id = await connetion('tools').insert({
      title,
      link,
      description
    }).returning('id');

    const fields_to_insert = tags.map(tag =>
      ({ tools_id: tools_id[0], tag_name: tag })
    )
    await connetion('tags').insert(fields_to_insert);

    res.status(201).send("Created");
  },

  async delete(req, res) {
    const { id } = req.params;

    await connetion('tools').where('id', id).delete();
    await connetion('tags').where('tools_id', id).delete();
    res.status(204).send("No Content");
  }

}