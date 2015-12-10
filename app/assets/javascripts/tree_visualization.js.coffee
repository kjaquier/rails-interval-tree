$(() ->

    return if $('.tree__vizualization').length <= 0


    children_from_interval = (intervals, from_indice, to_indice, level) ->
        children = []
        for interval in intervals
            if interval.tree_level == level and
            interval.left_tree > from_indice and
            interval.right_tree < to_indice
                children.push({
                    "title": interval.label,
                    "left": interval.left_tree,
                    "right": interval.right_tree,
                    "level": interval.tree_level,
                    "children": children_from_interval(intervals,
                                                     interval.left_tree,
                                                     interval.right_tree,
                                                     interval.tree_level + 1)
                })

        return children

    root_from_intervals = (intervals) ->
        if intervals == undefined
            return {}

        root = intervals.root
        console.log("get intervals", intervals)
        children = children_from_interval(intervals.children,
                                          root.left_tree,
                                          root.right_tree,
                                          root.tree_level + 1)
        { "title": root.label, \
          "left": root.left_tree, \
          "right": root.right_tree, \
          "level": root.tree_level, \
          "children": children }



    # Prepare the dom with D3JS canvas
    width = $('.tree__vizualization:first').width()
    height = 600

    cluster = d3.layout.cluster().size([width - 100, height-100]);

    diagonal = d3.svg.diagonal().projection((d) ->
        [d.x, d.y]
    );

    svg = (d3.select(".tree__vizualization").append("svg")
                            .attr("width", width)
                            .attr("height", height)
                            .append("g")
                            .attr("transform", "translate(0,40)"))

    draw_root = (root) ->
        nodes = cluster.nodes(root)
        links = cluster.links(nodes);

        link = (svg.selectAll(".link")
                   .data(links)
                   .enter().append("path")
                   .attr("class", "link")
                   .attr("d", diagonal))

        node = (svg.selectAll(".node")
                   .data(nodes)
                   .enter().append("g")
                   .attr("class", (d) ->
                       classes = ["tree__node"]
                       classes.push("root") if d.level == 1
                       classes.push("leaf") if d.left == d.right - 1
                       console.log("classes" ,classes, d.left, d.right)
                       return classes.join(" ")
                   ).attr("transform", (d) ->
                       "translate(" + d.x + "," + d.y + ")";
                   ))

        node.append("circle").attr("r", 15);

        # Node label
        (node.append("text")
             .attr("dx", (d) ->
                 -4 * d.title.length
             )
             .attr("dy", 30).text((d) ->
                d.title
             )
             .attr("class", "node__label"))

        # Add Indices
        (node.append("text")
             .attr("dx", -40)
             .attr("dy", 4).text((d) ->
                "" + d.left
             )
             .attr("class", "left_tree node__indice"))

        (node.append("text")
             .attr("dx", 30)
             .attr("dy", 4).text((d) ->
                "" + d.right
             )
             .attr("class", "right_tree node__indice"))

        d3.select(self.frameElement).style("height", height + "px")


    # Load the data remotly and create the tree.
    $.get(window.location.href + ".json").success((data) ->
        draw_root(root_from_intervals(data))
    )
)
