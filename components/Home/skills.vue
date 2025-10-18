<template>
    <div class="flex flex-col justify-center items-center" ref="skills">
        <div ref="draw" />
    </div>
</template>

<script setup>

import Matter from "matter-js"

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from "gsap"

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)
}

const draw = ref(null)
const skills = ref(null)

const allSkills = [
    { name: "Python", img_name: "python", percent: 1, level: "Proficient" },
    { name: "Java", img_name: "java", percent: 0.6, level: "Intermediate" },
    { name: "JavaScript", img_name: "javascript", percent: 1, level: "Proficient" },
    { name: "C#", img_name: "csharp", percent: 0.5 },
    { name: "C++", img_name: "cpp", percent: 1 },
    { name: "R", img_name: "r", percent: 0.5 },
    { name: "Html", img_name: "html", percent: 1 },
    { name: "CSS", img_name: "css", percent: 1 },
    { name: "Vue", img_name: "vue", percent: 1 },
    { name: "React", img_name: "react", percent: 1 },
    { name: "Nuxt", img_name: "nuxt", percent: 1, level: "Proficient" },
    { name: "MongoDB", img_name: "mongodb", percent: 1 },
    { name: "Nginx", img_name: "nginx", percent: 1 },
    { name: "Typescript", img_name: "typescript", percent: 0.5 },
    { name: "Graphql", img_name: "graphql", percent: 0.5 },
    { name: "NodeJS", img_name: "nodejs", percent: 0.5 },
    { name: "Ubuntu", img_name: "ubuntu", percent: 0.5 },
    { name: "Git", img_name: "git", percent: 0.5 },
    { name: "Docker", img_name: "docker", percent: 0.5 },
    { name: "Linux", img_name: "linux", percent: 0.5 },
]

const boxes = []
var engine = null
var triggeredAnimation = false
var render = null
var runner = null
const skill_width = window.innerWidth > 800 ? 75 : 100
const skill_height = window.innerWidth > 800 ? 75 : 100
const png_width_px = 256
const png_height_px = 256
const png_mobile_scale = 0.6
var mobile = false
const skill_gap_x = 25
const skill_gap_y_initial = 10
const start_x = 0
const start_y = 10
var width = 0.4 * window.innerWidth
var height = 0.6 * window.innerHeight
var right = null
var left = null
var ceiling = null
var ground = null
const prev = {
    width: null,
    height: null
}
const gamma = 10

const createSkills = () => {
    let x = start_x
    let y = height / 2 + skill_gap_y_initial

    for (let skill of allSkills) {
        boxes.push(Matter.Bodies.rectangle(x, y, skill_width, skill_height, {
            render: {
                sprite: {
                    texture: `/skills/${skill.img_name.toLowerCase()}.png`,
                    xScale: skill_width / png_width_px,
                    yScale: skill_height / png_height_px
                }
            },
            label: "skill"
        }))
        x += skill_width + skill_gap_x
        if (x > width) {
            x = start_x
            y -= 1
        }
    }

    return boxes
}
const handle_resize = () => {

    resize()
    resizeRender()
}
const resize = () => {
    width = 0.4 * window.innerWidth
    height = 0.6 * window.innerHeight
    checkMobileSize()
    if (!prev.width && !prev.height) {
        prev.width = width
        prev.height = height
    }
}
const resizeRender = () => {
    render.bounds.max.x = width;
    render.bounds.max.y = height;
    render.options.width = width;
    render.options.height = height;
    render.canvas.width = width;
    render.canvas.height = height;


    Matter.Body.set(ground, "position", { x: width / 2, y: height })
    Matter.Body.set(ceiling, "position", { x: width / 2, y: 0 })
    Matter.Body.scale(ground, width / prev.width, 1)
    Matter.Body.scale(ceiling, width / prev.width, 1)

    Matter.Body.scale(left, 1, height / prev.height)
    Matter.Body.scale(right, 1, height / prev.height)
    Matter.Body.set(right, "position", { x: width + 10, y: height })
    Matter.Body.set(left, "position", { x: - 10, y: height })

    // console.log("=====================")
    // if (width > prev.width) console.log("UPSIZED")
    // else console.log("DOWNSIZED")
    // console.log(`Previous Width: ${prev.width}, NOW: ${width}`)
    // console.log(`Previous Height: ${prev.height}, NOW: ${height}`)
    // console.log(`Area of left: ${left.area}`)
    // console.log(`Area of right: ${right.area}`)
    // console.log(`Area of top: ${ceiling.area}`)
    // console.log(`Area of down: ${ground.area}`)

    prev.width = width
}
const scaleSkills = (xScale, yScale, xTextureScale, yTextureScale) => {
    engine.world.bodies.forEach((body) => {
        if (body.label == "skill") {
            Matter.Body.scale(body, xTextureScale, yTextureScale)
            body.render.sprite.yScale = yScale
            body.render.sprite.xScale = xScale
        }
    })
}
const checkMobileSize = () => {
    if (width <= 400) {
        width = 400
        if (!mobile) {
            mobile = true
            scaleSkills(
                (skill_width * png_mobile_scale) / png_width_px,
                (skill_height * png_mobile_scale) / png_height_px,
                png_mobile_scale,
                png_mobile_scale
            )
        }
    } else if (mobile) {
        mobile = false
        scaleSkills(
            skill_width / png_width_px,
            skill_height / png_width_px,
            1 / png_mobile_scale,
            1 / png_mobile_scale
        )
    }
}
const scrollTrigger = () => {
    gsap.to(
        skills.value,
        {
            scrollTrigger: {
                trigger: skills.value,
                markers: false,
                start: "bottom-=20% bottom",
                end: "bottom-=20% top",
                onToggle: self => applyForce(self.isActive),
            },
        },
    )
}
const applyForce = (active) => {
    if (active && !triggeredAnimation) {
        boxes.forEach(box => {
            Matter.Body.applyForce(box, box.position, {
                x: height / 1500 * (Math.round(Math.random()) * 2 - 1),
                y: height / 1500 * (Math.round(Math.random()) * 2 - 1),
            })
        })
        triggeredAnimation = true
    }
}
onMounted(() => {
    // window.addEventListener("click", permission)
    // module aliases
    // var Engine = Matter.Engine,
    //     Render = Matter.Render,
    //     Runner = Matter.Runner,
    //     Bodies = Matter.Bodies,
    //     Composite = Matter.Composite,
    //     Mouse = Matter.Mouse,
    //     MouseConstraint = Matter.MouseConstraint
    scrollTrigger()
    window.addEventListener("resize", handle_resize)

    // create an engine
    engine = Matter.Engine.create();

    // Resize before setting renderer
    resize()
    // create a renderer
    render = Matter.Render.create({
        element: draw.value,
        engine: engine,
        options: {
            width: width,
            height: height,
            wireframes: false,
            background: '#111'
        },
    });

    // create two boxes and a ground

    ground = Matter.Bodies.rectangle(width / 2, height, width, 60, { isStatic: true, label: "ground", fillStyle: 'red' });
    ceiling = Matter.Bodies.rectangle(width / 2, 0, width, 60, { isStatic: true, label: "ceiling" });
    left = Matter.Bodies.rectangle(-10, height / 2, 100, window.innerHeight * 20, { isStatic: true, label: "left" });
    right = Matter.Bodies.rectangle(width + 10, height / 2, 100, window.innerHeight * 20, { isStatic: true, label: "right" });

    var mouse = Matter.Mouse.create(draw.value)
    var mConstraint = Matter.MouseConstraint.create(engine, {
        mouse
    })

    // add all of the bodies to the world
    Matter.Composite.add(engine.world, mConstraint)
    Matter.Composite.add(engine.world, [ground, left, right, ceiling].concat(createSkills()));

    // run the renderer
    Matter.Render.run(render);

    // create runner
    runner = Matter.Runner.create({
        isFixed: true
    });

    // run the engine
    Matter.Runner.run(runner, engine);

    if (mobile) {
        scaleSkills(
            (skill_width * png_mobile_scale) / png_width_px,
            (skill_height * png_mobile_scale) / png_height_px,
            png_mobile_scale,
            png_mobile_scale
        )
    }

})

</script>